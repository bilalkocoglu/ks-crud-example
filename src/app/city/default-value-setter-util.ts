import {BaseUpsertConfig} from 'ks-base-crud';

export class DefaultValueSetterUtil {
  static setDefaultValue(config: BaseUpsertConfig, value: any): void {
    config.inputConfigs.forEach(inputConfig => {
      if (value[inputConfig.name] && value[inputConfig.name] !== '') {
        inputConfig.defaultValue = value[inputConfig.name];
      }
    });
  }
}
