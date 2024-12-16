import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { DriverSummary } from 'src/app/core/models/driver-summary';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css'],
})
export class DriverProfileComponent implements OnInit {
  driverId!: number;
  driverDetails: any;

  summaryData: DriverSummary | null = null;
  weeklyData: Array<{ averageFuelConsumption: number; weekName: string }> = [];
  monthlyData: Array<{ averageFuelConsumption: number; monthName: string }> = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.driverId = +this.route.snapshot.paramMap.get('id')!;
    this.loadDriverDetails();
    this.loadDriverAverages(); 
    this.loadDriverSummary();
  }


  loadDriverSummary(): void {
    this.apiService.getDriverSummary(this.driverId).subscribe({
      next: (summary) => {
        console.log('Driver Summary Data:', summary); // Debugging
        this.summaryData = summary; // Pass data to summaryData
      },
      error: (err) => {
        console.error('Error loading driver summary:', err);
      },
    });
  }
  
  loadDriverDetails(): void {
    this.apiService.getDrivers().subscribe((drivers) => {
      this.driverDetails = drivers.find((driver) => driver.id === this.driverId);
    });
  }

  loadDriverAverages(): void {
    this.apiService
      .getDriverAverages(this.driverId)
      .subscribe((data: Array<{ averageFuelConsumption: number; weekName?: string; monthName?: string }>) => {
        // Separate weekly and monthly data
        this.weeklyData = data.filter((item) => item.weekName) as Array<{ averageFuelConsumption: number; weekName: string }>;
        this.monthlyData = data.filter((item) => item.monthName) as Array<{ averageFuelConsumption: number; monthName: string }>;
      });
  }
}
