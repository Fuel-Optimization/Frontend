import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { driversTableComponent } from './features/drivers/drivers-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { DriverProfileComponent } from './features/driver-profile/driver-profile.component';
import { NgChartsModule } from 'ng2-charts';
import { DriverFuelConsumptionBarChartComponent } from './ui-charts/driver-fuel-consumption-bar-chart/driver-fuel-consumption-bar-chart.component';
import { DriverSummaryCardsComponent } from './cards/driver-summary-cards/driver-summary-cards.component';
import { DashboardCardComponent } from './cards/dashboard-card/dashboard-card.component';
import { GenerateReportsComponent } from './features/generate-reports/generate-reports.component';
import { FormsModule } from '@angular/forms';
import { DriverLineChartComponent } from './ui-charts/driver-line-chart/driver-line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    driversTableComponent,
    DriverProfileComponent,
    DriverFuelConsumptionBarChartComponent,
    DriverSummaryCardsComponent,
    DashboardCardComponent,
    GenerateReportsComponent,
    DriverLineChartComponent,
  

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
