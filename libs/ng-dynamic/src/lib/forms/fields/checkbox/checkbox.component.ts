import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { CheckboxInputParam } from '../../../models';

@Component({
  selector: 'ng-dynamic-form-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent extends BaseFieldComponent<CheckboxInputParam> {}
