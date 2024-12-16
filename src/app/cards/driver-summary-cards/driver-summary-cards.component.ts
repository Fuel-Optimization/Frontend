import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-driver-summary-cards',
  templateUrl: './driver-summary-cards.component.html',
  styleUrls: ['./driver-summary-cards.component.css'],
})
export class DriverSummaryCardsComponent implements OnChanges {
  @Input() driverData: any | null = null;

  predictedFuelConsumption = 0;
  averageSpeed = 0;
  maxSpeed = 0;
  engineEfficiency = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['driverData']?.currentValue) {
      const data = changes['driverData'].currentValue;
      this.predictedFuelConsumption = data.predictedFuelConsumption || 0;
      this.averageSpeed = data.averageSpeed || 0;
      this.maxSpeed = data.maxSpeed || 0;
      this.engineEfficiency = data.engineEfficiency || 0;
    }
  }
}
