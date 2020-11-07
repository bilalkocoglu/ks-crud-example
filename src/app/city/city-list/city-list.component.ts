import { Component, OnInit } from '@angular/core';
import {BaseListConfig} from 'ks-base-crud';
import {CityFacadeService} from '../city-facade.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  listConfig: BaseListConfig;
  data: any;

  constructor(private cityFacadeService: CityFacadeService) {
  }

  ngOnInit(): void {
    this.cityFacadeService.all().subscribe(data => {
      console.log(data);
      this.data = data;
      this.listConfig = this.prepareListConfig();
    });
  }

  prepareListConfig(): BaseListConfig {
    return {
      facade: this.cityFacadeService,
      addUrl: 'city/add',
      updateUrl: 'city/update',
      data: this.data,
      columnNamesValuePaths: [
        {
          label: 'ID',
          valuePath: 'id',
        },
        {
          label: 'SOKAK',
          valuePath: 'address.street.name',
        },
        {
          label: 'Adres Desc',
          valuePath: 'address.desc',
        },
        {
          label: 'Street Id',
          valuePath: 'address.street.id',
        },
        {
          label: 'DATE',
          valuePath: 'date',
        },
        {
          label: 'First Customer Skill Name',
          valuePath: 'customers[0].skill.name',
        },
      ],
    };
  }
}
