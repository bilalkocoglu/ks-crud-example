import { Injectable } from '@angular/core';
import {AbstractFacadeService} from 'ks-base-crud';
import {AbstractApiService} from 'ks-base-crud';
import {CityApiService} from './city-api.service';

@Injectable({
  providedIn: 'root'
})
export class CityFacadeService extends AbstractFacadeService{

  constructor(private cityApiService: CityApiService) {
    super();
  }

  getService(): AbstractApiService {
    return this.cityApiService;
  }
}
