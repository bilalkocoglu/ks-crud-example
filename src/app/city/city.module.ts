import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list/city-list.component';
import {KsBaseCrudModule} from 'ks-base-crud';
import { CityUpsertComponent } from './city-upsert/city-upsert.component';

@NgModule({
  declarations: [CityListComponent, CityUpsertComponent],
  imports: [
    CommonModule,
    KsBaseCrudModule
  ]
})
export class CityModule { }
