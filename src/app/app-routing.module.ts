import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './city/city-list/city-list.component';
import {CityUpsertComponent} from './city/city-upsert/city-upsert.component';
import {UpsertType} from 'ks-base-crud';

const routes: Routes = [
  {
    path: '',
    component: CityListComponent,
  },
  {
    path: 'city/add',
    component: CityUpsertComponent,
    data: {type: UpsertType.ADD}
  },
  {
    path: 'city/update',
    component: CityUpsertComponent,
    data: {type: UpsertType.EDIT}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
