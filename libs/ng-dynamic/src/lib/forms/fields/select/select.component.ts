import { Component } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { SelectInputParams } from '../../../models';

@Component({
  selector: 'ng-dynamic-form-select',
  templateUrl: './select.component.html',
})
export class SelectComponent extends BaseFieldComponent<SelectInputParams> {
}
