import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import *  as dashboardContainers from './containers';
import { DashboardYusenModule } from '@modules/dashboard-yusen/dashboard-yusen.module';
import { SBRouteData } from '@modules/navigation/models';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard - Yusen Logistics',
      breadcrumbs: [
          {
              text: 'Yusen',
              active: true,
          },
      ],
  } as SBRouteData,
  canActivate: [],
    component: dashboardContainers.DashboardYusenComponent
  }
];
@NgModule({
  imports: [DashboardYusenModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardYusenRoutingModule { }
