import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextInputParams } from '../fields/text/text.component';

export type Field =
  | TextInputParams
  | { value: string; name: string; type: 'text' | 'checkbox' }
  | {
      value: string;
      name: string;
      type: 'select';
      options: [{ name: string; value: string }];
    };
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
    this.formfields.forEach((field) => {
      formControls[field.name] = new FormControl(
        field.value || '',
        Validators.required
      );
    });
    this.form = new FormGroup(formControls);
  }
}
