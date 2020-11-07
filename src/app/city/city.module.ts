import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list/city-list.component';
import {KsBaseCrudModule} from 'ks-base-crud';

@NgModule({
  declarations: [CityListComponent],
  imports: [
    CommonModule,
    KsBaseCrudModule
  ]
})
export class CityModule { }
