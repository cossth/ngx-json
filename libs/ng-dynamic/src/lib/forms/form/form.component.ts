import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextInputParams } from '../fields/text/text.component';
import { SelectInputParams } from '../fields/select/select.component';
import { CheckboxInputParam } from '../fields/checkbox/checkbox.component';
import { RadioInputParam } from '../fields/radio/radio.component';
export interface InputParams {
  label: string;
  name: string;
  value?: number | string | boolean | Blob;
  required?: boolean;
}
export type Field =
  | TextInputParams
  | SelectInputParams
  | CheckboxInputParam
  | RadioInputParam;

export type Fields = Field[];
@Component({
  selector: 'ng-dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit = new EventEmitter();
  @Input() formfields: Fields = [];
  submitText = 'Save';
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    const formControls = {};
    this.formfields.forEach((__field) => {
      if (!__field.type) {
        // const options = {};
        // for (const option of field.options) {
        //   options[option.value] = new FormControl(option.value);
        // }
        // formControls[field.name] = new FormGroup(options);
      } else {
        formControls[__field.name] = new FormControl(
          __field.value || '',
          this.getValidators(__field)
        );
      }
    });
    this.form = new FormGroup(formControls);
  }
  getValidators(field: Field) {
    const validators = [];

    if (field.required) {
      validators.push(Validators.required);
    }

    return validators;
  }
}
