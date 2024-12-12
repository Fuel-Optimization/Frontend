import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  totalDrivers = 0;
  goodDrivers = 0;
  excellentDrivers = 0;
  poorDrivers = 0;


  displayedColumns: string[] = [
    'id',
    'name',
    'experience',
    'fuelConsumption',
    'fuelConsumptionStatus',
  ];
  dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
  totalLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.loadDrivers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; // Enable sorting
  }

  loadDrivers() {
    const drivers = [
      {
        id: 1,
        name: { fullName: 'Alice Johnson', avatar: 'assets/images/avatar1.png' },
        experience: '5 years',
        fuelConsumption: '8.5 L/100km',
        fuelConsumptionStatus: 'good',
      },
      {
        id: 2,
        name: { fullName: 'Jonathan Smith', avatar: 'assets/images/avatar2.png' },
        experience: '3 years',
        fuelConsumption: '7.2 L/100km',
        fuelConsumptionStatus: 'excellent',
      },
      {
        id: 3,
        name: { fullName: 'Vincent Carter', avatar: 'assets/images/avatar3.png' },
        experience: '7 years',
        fuelConsumption: '6.8 L/100km',
        fuelConsumptionStatus: 'excellent',
      },
      {
        id: 4,
        name: { fullName: 'Chris Evans', avatar: 'assets/images/avatar4.png' },
        experience: '2 years',
        fuelConsumption: '9.0 L/100km',
        fuelConsumptionStatus: 'poor',
      },
      {
        id: 5,
        name: { fullName: 'Emma Davis', avatar: 'assets/images/avatar5.png' },
        experience: '4 years',
        fuelConsumption: '7.5 L/100km',
        fuelConsumptionStatus: 'good',
      },
    ];

    this.dataSource.data = drivers;
    this.totalDrivers = drivers.length;
    this.goodDrivers = drivers.filter(driver => driver.fuelConsumptionStatus === 'good').length;
    this.excellentDrivers = drivers.filter(driver => driver.fuelConsumptionStatus === 'excellent').length;
    this.poorDrivers = drivers.filter(driver => driver.fuelConsumptionStatus === 'poor').length;

    
    this.dataSource.data = drivers;
    this.totalLength = drivers.length;
  }

  navigateToProfile(driverId: number) {
    console.log(`Navigating to profile of driver with ID: ${driverId}`);
  }
}
