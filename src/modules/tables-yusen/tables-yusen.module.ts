import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesYusenRoutingModule } from './tables-yusen-routing.module';
import { TablesComponent } from './containers/tables/tables.component';

import *  as tablesContainers from './containers';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {TableModule} from 'primeng/table';







@NgModule({
  declarations: [tablesContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule,
    NavigationModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    TableModule
  ],
  exports: [tablesContainers.containers]
})
export class TablesYusenModule { }
