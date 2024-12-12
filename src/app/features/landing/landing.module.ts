import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Use CommonModule in feature modules
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
