import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class driversTableComponent implements OnInit {
  totalDrivers = 0;
  goodDrivers = 0;
  excellentDrivers = 0;
  poorDrivers = 0;

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'mobile',
    'experience',
    'fuelConsumption',
    'fuelConsumptionStatus',
  ];
  dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
  totalLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService,  private router: Router) {}

  ngOnInit() {
    this.loadDrivers();

    // Custom filter for both search and experience range
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const [searchValue, experienceRange] = filter.split('|');
      const searchMatch =
        data.id.toString().toLowerCase().includes(searchValue) ||
        data.name.toLowerCase().includes(searchValue);

      if (experienceRange === 'all') return searchMatch;

      const experience = parseInt(data.yearsOfExperience, 10);
      if (experienceRange === '1-3') return searchMatch && experience >= 1 && experience <= 3;
      if (experienceRange === '4-6') return searchMatch && experience >= 4 && experience <= 6;
      if (experienceRange === '7+') return searchMatch && experience >= 7;

      return searchMatch;
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; // Enable sorting
  }

  loadDrivers() {
    this.apiService.getDrivers().subscribe(
      (drivers) => {
        this.dataSource.data = drivers.map(driver => ({
          ...driver,
          image: driver.image || 'assets/images/user2.jpg', // Default image if not provided
          jobTitle: driver.jobTitle || 'Driver', // Placeholder job title
        }));
  
        // Calculate stats
        this.totalDrivers = drivers.length;
        this.goodDrivers = drivers.filter((d: any) => d.status === 'good').length;
        this.excellentDrivers = drivers.filter((d: any) => d.status === 'excellent').length;
        this.poorDrivers = drivers.filter((d: any) => d.status === 'poor').length;
        this.totalLength = drivers.length;
      },
      (error) => {
        console.error('Error fetching drivers:', error);
      }
    );
  }
  

  // Method to filter the dataSource based on search input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.updateFilter(filterValue, this.getCurrentExperienceFilter());
  }

  // Method to handle experience filter
  filterByExperience(event: Event) {
    const experienceValue = (event.target as HTMLSelectElement).value;
    this.updateFilter(this.getCurrentSearchFilter(), experienceValue);
  }

  // Helper to update the combined filter
  private updateFilter(searchValue: string, experienceRange: string) {
    this.dataSource.filter = `${searchValue}|${experienceRange}`; // Combine search and experience filters
  }

  // Helper to get the current search filter value
  private getCurrentSearchFilter(): string {
    return (document.querySelector('.search-bar') as HTMLInputElement)?.value.trim().toLowerCase() || '';
  }

  // Helper to get the current experience filter value
  private getCurrentExperienceFilter(): string {
    return (document.querySelector('.filter-dropdown') as HTMLSelectElement)?.value || 'all';
  }


  // Navigate to the profile of the clicked driver
  navigateToProfile(driverId: number): void {
    this.router.navigate([`/driver-profile/${driverId}`]);
  }


  // editDriver(driverId: number): void {
  //   console.log(`Editing driver with ID: ${driverId}`);
  //   // Add your logic to navigate to the edit page or open a modal
  // }
  
  // deleteDriver(driverId: number): void {
  //   console.log(`Deleting driver with ID: ${driverId}`);
  //   // Add your logic to delete the driver
  // }
  
  
}
