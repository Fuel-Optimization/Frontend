import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-contribution-pie-chart',
  templateUrl: './contribution-pie-chart.component.html',
  styleUrls: ['./contribution-pie-chart.component.css']
})
export class ContributionPieChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.renderPieChart();
  }

  renderPieChart() {
    const contributionData = [
      { name: 'Acceleration', value: 30 },
      { name: 'Engine Speed', value: 25 },
      { name: 'Clutch', value: 20 },
      { name: 'Other Factors', value: 25 },
    ];

    const labels = contributionData.map((item) => item.name);
    const values = contributionData.map((item) => item.value);

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Contribution Analysis',
          data: values,
          backgroundColor: [
            '#42a5f5', // Blue for Acceleration
            '#66bb6a', // Green for Engine Speed
            '#ffa726', // Orange for Clutch
            '#ab47bc', // Purple for Other Factors
          ],
          hoverBackgroundColor: [
            '#64b5f6', // Lighter blue for hover
            '#81c784', // Lighter green for hover
            '#ffb74d', // Lighter orange for hover
            '#ba68c8', // Lighter purple for hover
          ],
          borderColor: '#fff',
          borderWidth: 2,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom' as const, // Use `as const` to enforce stricter typing
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
    };
    

    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut', // For a pie chart, you can also use 'pie'
      data: data,
      options: options,
    });
  }
}
