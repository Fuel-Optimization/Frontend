import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-driver-line-chart',
  templateUrl: './driver-line-chart.component.html',
  styleUrls: ['./driver-line-chart.component.css']
})
export class DriverLineChartComponent implements OnInit {
  // Dummy data for testing
  timelineData: { [key: string]: number[] } = {
    engineSpeed: [800, 1200, 1500, 1700, 2000],
    vehicleSpeed: [20, 40, 60, 80, 100],
  };
  

  selectedAttribute: string = 'engineSpeed';

  
  mixedChartData: ChartDataset[] = [
   
    {
       type: 'line', // Line dataset
    data: [800, 1200, 1500, 1700, 2000],
    label: 'Line Dataset',
    fill: true, // Fill the area under the line
    borderColor: '#ff6384', // Line color
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Fill color
    borderWidth: 2,
    tension: 0.4, // Smooth curves
    pointRadius: 0, // Hide points on the line
    pointHoverRadius: 0, // Hide points when hovering
    },
  ];
  

  mixedChartLabels: string[] = ['1s', '2s', '3s', '4s', '5s'];

  // Chart Options
  mixedChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: { beginAtZero: true },
      x: { display: true },
    },
  };

  ngOnInit(): void {
    this.updateChartData();
  }

  updateChartData(): void {
    const data = this.timelineData[this.selectedAttribute] || [];
    this.mixedChartData[0].data = data; // Bars data
    this.mixedChartData[1].data = data; // Line data
  }
}
