import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
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
  description?: string;
  regularExpression?: string;
  readonly?:boolean;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit = new EventEmitter();
  @Input() formfields: Fields = [];
  @Input() submitText = 'Save';
  initialised: boolean;
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.__updateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.__updateForm();
  }
  __updateForm() {
    const formControls = {};
    this.formfields.forEach((__field) => {
      formControls[__field.name] = new FormControl(
        __field.value || '',
        this.getValidators(__field)
      );
    });
    this.form = new FormGroup(formControls);
    this.initialised = true;
  }
  getValidators(field: Field) {
    const validators = [];

    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.type === 'email') {
      validators.push(Validators.email);
    }

    if (field.regularExpression) {
      validators.push(Validators.pattern(field.regularExpression));
    }

    return validators;
  }
}
