import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private httpClient: HttpClient) {
  }

  internalDelete(): Observable<any> {
    return this.httpClient.delete('');
  }

  internalAll(): Observable<any> {
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    const data = [
      {
        id: 1,
        date: 1321,
        address: {
          desc: 'addressDesc',
          street: {
            name: 'street1',
            id: 3423,
          },
        },
        customers: [
          {
            id: 6894,
            name: 'name1',
            skill: {
              id: 67846,
              name: 'skill1',
            },
          },
        ],
      },
      {
        id: 2,
        date: 234234,
        address: {
          desc: 'addressDesc',
          street: {
            name: 'street1',
            id: 3423,
          },
        },
        customers: [
          {
            id: 6834494,
            name: 'name2',
            skill: {
              id: 6758768,
              name: 'skill2',
            },
          },
        ],
      },
      {
        id: 3,
        date: 8098079,
        address: {
          desc: 'addressDesc',
          street: {
            name: 'street1',
            id: 95,
          },
        },
        customers: [
          {
            id: 647675,
            name: 'name3',
            skill: {
              id: 4234,
              name: 'skill3',
            },
          },
        ],
      },
      {
        id: 4,
        date: 1234123,
        address: {
          desc: 'addressDesc',
          street: {
            name: 'street1',
            id: 3423,
          },
        },
        customers: [
          {
            id: 76587,
            name: 'name4',
            skill: {
              id: 9860,
              name: 'skill4',
            },
          },
        ],
      },
      {
        id: 5,
        date: 56675,
        address: {
          desc: 'addressDesc',
          street: {
            name: 'street1',
            id: 3423,
          },
        },
        customers: [
          {
            id: 3453,
            name: 'name5',
            skill: {
              id: 34573,
              name: 'skill5',
            },
          },
        ],
      },
    ];
    return of(data);
  }
}
