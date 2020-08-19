import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { RadioInputParam } from '../../../models';

@Component({
  selector: 'ng-dynamic-form-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent extends BaseFieldComponent<RadioInputParam> {}
