import { Component } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { CheckboxInputParam } from '../../../models/models';

@Component({
  selector: 'ngx-json-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent extends BaseFieldComponent<CheckboxInputParam> {}
