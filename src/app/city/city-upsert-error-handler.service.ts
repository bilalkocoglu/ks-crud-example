import { Injectable } from '@angular/core';
import {IUpsertErrorHandler} from 'ks-base-crud';

@Injectable({
  providedIn: 'root'
})
export class CityUpsertErrorHandlerService implements IUpsertErrorHandler{

  constructor() { }

  handleAddError(error: any): void {
    console.log(error);
  }

  handleUpdateError(error: any): void {
    console.log(error);
  }
}
