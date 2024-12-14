import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './models/driver.model';
import { DriverAverage } from './models/driver-average.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:8086/api/drivers';

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetch all drivers from the API
   */
  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl);
  }

  /**
   * Fetch driver averages (weekly and monthly) based on the driver ID
   * @param driverId The ID of the driver
   */
  getDriverAverages(driverId: number): Observable<DriverAverage[]> {
    const url = `${this.baseUrl}/averages`;
    return this.http.get<DriverAverage[]>(url, {
      params: { driverId: driverId.toString() },
    });
  }
}
