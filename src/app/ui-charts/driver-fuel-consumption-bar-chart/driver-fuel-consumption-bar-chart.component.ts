import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-fuel-consumption-bar-chart',
  templateUrl: './driver-fuel-consumption-bar-chart.component.html',
  styleUrls: ['./driver-fuel-consumption-bar-chart.component.css']
})
export class DriverFuelConsumptionBarChartComponent implements OnInit {
  @Input() weeklyData: Array<{ averageFuelConsumption: number; weekName: string }> = [];
  @Input() monthlyData: Array<{ averageFuelConsumption: number; monthName: string }> = [];

  barChartData: {
    labels: string[];
    datasets: {
      data: number[];
      label: string;
      backgroundColor: string;
    }[];
  } = {
    labels: [], // Initialize as an empty string array
    datasets: [
      {
        data: [], // Initialize as an empty number array
        label: 'Fuel Consumption (L/100km)',
        backgroundColor: '#B2D1FF',
      },
    ],
  };
  
  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            family: 'Arial, sans-serif',
            size: 14,
          },
          color: '#666',
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#f5f5f5',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Arial, sans-serif',
            size: 12,
          },
          color: '#666',
        },
      },
      y: {
        grid: {
          color: '#e0e0e0',
          lineWidth: 1,
        },
        ticks: {
          font: {
            family: 'Arial, sans-serif',
            size: 12,
          },
          color: '#666',
          beginAtZero: true,
        },
      },
    },
    elements: {
      bar: {
        backgroundColor:'#ffffff',
        borderRadius: 10,
        borderSkipped: false,
      },
    },
  };

  ngOnInit(): void {
    // Display weekly data by default
    this.updateChart(this.weeklyData.map((d) => d.weekName), this.weeklyData.map((d) => d.averageFuelConsumption));
  }

  onChartFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLSelectElement).value;

    if (filterValue === 'week') {
      // Update chart with weekly data
      this.updateChart(
        this.weeklyData.map((d) => d.weekName),
        this.weeklyData.map((d) => d.averageFuelConsumption)
      );
    } else if (filterValue === 'month') {
      // Update chart with monthly data
      this.updateChart(
        this.monthlyData.map((d) => d.monthName),
        this.monthlyData.map((d) => d.averageFuelConsumption)
      );
    }
  }

  updateChart(labels: string[], data: number[]): void {
    this.barChartData.labels = labels; // Update labels
    this.barChartData.datasets[0].data = data; // Update data
  }
  
}
