import {Injectable} from '@angular/core';
import {BaseUpsertConfig, ComponentType, ContentType, IUpsertFormHook} from 'ks-base-crud';
import {Validators} from '@angular/forms';
import {DefaultValueSetterUtil} from './default-value-setter-util';

@Injectable({
  providedIn: 'root'
})
export class CityFormHook implements IUpsertFormHook {
  addHook(config: BaseUpsertConfig, value: any): BaseUpsertConfig {
    this.logValue(value);
    config = this.hideName(config, value);
    DefaultValueSetterUtil.setDefaultValue(config, value);
    return config;
  }

  updateHook(config: BaseUpsertConfig, value: any): BaseUpsertConfig {
    this.logValue(value);
    config = this.hideName(config, value);
    DefaultValueSetterUtil.setDefaultValue(config, value);
    return config;
  }

  logValue(value: any): void {
    console.log(value);
  }

  private hideName(config: BaseUpsertConfig, value: any): BaseUpsertConfig {
    if (value.select === 'Item2Key') {
      let nameIndex = -1;
      config.inputConfigs.forEach(inputConfig => {
        if (inputConfig.name === 'name') {
          nameIndex = config.inputConfigs.indexOf(inputConfig);
        }
      });

      if (nameIndex !== -1) {
        config.inputConfigs.splice(nameIndex, 1);
      }

      // seçilenleri config lerin default value larına setlemek gerekiyor
      // formun seçilmiş halinden devam edebilmesi için (util e bağlanmalı)
    } else {
      let nameIndex = -1;
      config.inputConfigs.forEach(inputConfig => {
        if (inputConfig.name === 'name') {
          nameIndex = config.inputConfigs.indexOf(inputConfig);
        }
      });

      if (nameIndex === -1) {
        config.inputConfigs.push({
          id: 'name',
          name: 'name',
          label: 'İsim',
          order: 1,
          componentType: ComponentType.INPUT,
          contentType: ContentType.TEXT,
          checkValidationForButtons: true,
          formGroupCssClass: 'background-red',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              errorMessage: 'Doldurmalisiniz.'
            }
          ]
        });
      }
    }
    return config;
  }
}
