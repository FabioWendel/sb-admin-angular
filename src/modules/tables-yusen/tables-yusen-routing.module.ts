import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import *  as tablesContainers from './containers';
import { TablesYusenModule } from './tables-yusen.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tables - Yusen Logistics',
      breadcrumbs: [
          {
              text: 'Tables',
              active: true,
          },
      ],
  } as SBRouteData,
  canActivate: [],
    component: tablesContainers.TablesComponent
  }
];

@NgModule({
  imports: [TablesYusenModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesYusenRoutingModule { }
