import { Component } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { SelectInputParams } from '../../../models/models';

@Component({
  selector: 'ngx-json-select',
  templateUrl: './select.component.html',
})
export class SelectComponent extends BaseFieldComponent<SelectInputParams> {
}
