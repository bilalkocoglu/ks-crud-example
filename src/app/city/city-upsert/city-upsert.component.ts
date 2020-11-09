import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {BaseUpsertConfig, ComponentType, ContentType, UpsertType} from 'ks-base-crud';
import {ActivatedRoute} from '@angular/router';
import {CityFacadeService} from '../city-facade.service';
import {CityFormHook} from '../city-form-hook';
import {CityModelProviderService} from '../city-model-provider.service';
import {CityUpsertErrorHandlerService} from '../city-upsert-error-handler.service';

@Component({
  selector: 'app-city-upsert',
  templateUrl: './city-upsert.component.html',
  styleUrls: ['./city-upsert.component.scss']
})
export class CityUpsertComponent implements OnInit {

  type: UpsertType;
  upsertConfig: BaseUpsertConfig;

  constructor(private activatedRoute: ActivatedRoute,
              private cityFacadeService: CityFacadeService,
              private cityFormHook: CityFormHook,
              private cityModelProvider: CityModelProviderService,
              private cityErrorHandler: CityUpsertErrorHandlerService) {
    activatedRoute.data.subscribe(data => {
      this.type = data.type;
      this.upsertConfig = this.prepareUpsertConfig();
    });
  }

  ngOnInit(): void {
  }

  prepareUpsertConfig(): BaseUpsertConfig {
    return {
      upsertType: this.type,
      hook: this.cityFormHook,
      modelProvider: this.cityModelProvider,
      facade: this.cityFacadeService,
      successUrl: '/',
      errorHandler: this.cityErrorHandler,
      inputConfigs: [
        {
          id: 'name',
          name: 'name',
          label: 'İsim',
          order: 1,
          componentType: ComponentType.INPUT,
          contentType: ContentType.TEXT,
          checkValidationForButtons: true,
          // formGroupCssClass: 'col-md-6',
          componentCssClass: 'col-md-6',
          labelCssClass: 'deneme',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              errorMessage: 'Doldurmalisiniz.'
            }
          ]
        },
        {
          id: 'date',
          name: 'date',
          label: 'Tarih',
          order: 2,
          componentCssClass: 'col-md-6',
          componentType: ComponentType.DATE,
          checkValidationForButtons: false
        },
        {
          id: 'select',
          name: 'select',
          label: 'Seçim',
          order: 3,
          componentCssClass: 'col-md-6',
          componentType: ComponentType.SELECT,
          options: [
            {
              key: 'ItemKey',
              value: 'ItemValue'
            },
            {
              key: 'Item2Key',
              value: 'Item2Value'
            }
          ]
        },
        {
          id: 'checkbox',
          name: 'checkbox',
          label: 'CHECKBOX',
          order: 4,
          componentCssClass: 'col-md-6',
          componentType: ComponentType.CHECKBOX,
          defaultValue: false
        },
        {
          id: 'radio',
          name: 'radio',
          label: 'RADIOOO',
          order: 5,
          componentCssClass: 'col-md-6',
          componentType: ComponentType.RADIO,
          options: [
            {
              key: 'ItemKey',
              value: 'ItemValue'
            },
            {
              key: 'Item2Key',
              value: 'Item2Value'
            }
          ]
        },
        {
          id: 'save',
          name: 'SAVE',
          order: 99999,
          componentCssClass: 'col-md-6',
          componentType: ComponentType.BUTTON,
          contentType: ContentType.SUBMIT,
          checkValidationForButtons: true,
          label: 'Kaydet'
        }
      ]
    };
  }
}
