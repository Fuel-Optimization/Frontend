import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ReportsComponent } from './features/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'landing',
        loadChildren: () =>
          import('./features/landing/landing.module').then((m) => m.LandingModule),
      },
      // { path: 'profile/:id', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
