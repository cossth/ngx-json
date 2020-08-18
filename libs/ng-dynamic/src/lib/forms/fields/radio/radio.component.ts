import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { InputParams } from '../../form/form.component';

export type RadioInputParam = InputParams & {
  type: 'radio';
  options: { label: string; value: string | number }[];
};

@Component({
  selector: 'ng-dynamic-form-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent extends BaseFieldComponent<RadioInputParam> {}
