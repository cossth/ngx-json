import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { RadioInputParam } from '../../../models/models';

@Component({
  selector: 'ngx-json-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent extends BaseFieldComponent<RadioInputParam> {}
