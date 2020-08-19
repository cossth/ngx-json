import { Component, OnInit } from '@angular/core';
import { InputParams } from '../../form/form.component';
import { BaseFieldComponent } from '../base-field.component';

export type CheckboxInputParam = InputParams & {
  type: 'checkbox';
  value?: boolean;
};
@Component({
  selector: 'ng-dynamic-form-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent extends BaseFieldComponent<CheckboxInputParam> {}
