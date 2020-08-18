import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputParams } from '../../form/form.component';
import { BaseFieldComponent } from '../base-field.component';

export type SelectInputParams = InputParams & {
  type: 'select' ;
  multiselect?: boolean;
  layout?: 'horizontal' | 'vertical',
  options: { label: string, value: string| number}[]
}
@Component({
  selector: 'ng-dynamic-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseFieldComponent<SelectInputParams> {
}
