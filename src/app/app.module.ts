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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    driversTableComponent,
    DriverProfileComponent,
    DriverFuelConsumptionBarChartComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
