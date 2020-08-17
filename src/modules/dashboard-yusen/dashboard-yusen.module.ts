import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import *  as dashboardContainers from './containers';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgxPowerBiModule } from 'ngx-powerbi';
import { PowerBIModule } from 'angular2-powerbi';





@NgModule({
  declarations: [dashboardContainers.containers],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    AppCommonModule,
    NavigationModule,
    NgxPowerBiModule,
  ],
  exports: [dashboardContainers.containers]
})
export class DashboardYusenModule { }
