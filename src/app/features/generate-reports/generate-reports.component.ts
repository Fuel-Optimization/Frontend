import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent {
  @Input() driverId!: number; // Driver ID passed dynamically
  selectedReportType: string = 'week'; // Default dropdown selection
  loading: boolean = false;
  error: string | null = null;
  success: boolean = false;

  private baseUrl = 'http://localhost:8087/api/reports/driver';

  constructor(private http: HttpClient) {}

  generateReport(): void {
    if (!this.driverId) {
      this.error = 'Driver ID is not provided.';
      return;
    }

    const groupByParam = this.selectedReportType;
    const apiUrl = `${this.baseUrl}/${this.driverId}?groupBy=${groupByParam}`;

    this.loading = true;
    this.error = null;
    this.success = false;

    this.http.get(apiUrl, { responseType: 'blob' }).subscribe({
      next: (response) => {
        this.downloadFile(response, `driver_${this.driverId}_report_${groupByParam}.pdf`);
        this.success = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to generate the report. Please try again.';
        console.error('API Error:', err);
        this.loading = false;
      }
    });
  }

  downloadFile(blob: Blob, fileName: string): void {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
