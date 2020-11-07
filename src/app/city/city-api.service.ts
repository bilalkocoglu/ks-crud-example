import { Injectable } from '@angular/core';
import {AbstractApiService} from 'ks-base-crud';
import {Observable, of} from 'rxjs';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CityApiService extends BaseService implements AbstractApiService{
  all(): Observable<any> {
    return this.internalAll();
  }

  delete(id: any): Observable<any> {
    return this.internalDelete();
  }

  findById(id: any): Observable<any> {
    return of();
  }

  pageable(page: number, size: number): Observable<any> {
    return of();
  }

  save(model: any): Observable<any> {
    return of({result: 'result'});
  }

  update(model: any): Observable<any> {
    return of();
  }
}
