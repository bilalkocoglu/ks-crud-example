import { Injectable } from '@angular/core';
import {BaseModelProviderService} from 'ks-base-crud';

@Injectable({
  providedIn: 'root'
})
export class CityModelProviderService extends BaseModelProviderService {

  constructor() {
    super();
  }


  prepareAddModel(formValue: any): any {
    console.log('Prepare City Add Model');
    return formValue;
  }

  prepareUpdateModel(formValue: any): any {
    console.log('Prepare City Update Model');
    return formValue;
  }
}
