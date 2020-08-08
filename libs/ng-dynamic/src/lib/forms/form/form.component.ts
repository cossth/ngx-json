import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ng-dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit = new EventEmitter();
  @Input() formfields: {value: string, name: string}[] = [];
  submitText = 'Save';
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    const formControls = {};
    this.formfields.forEach(field => {
      formControls[field.name] = new FormControl(field.value || '', Validators.required)
    });
    this.form = new FormGroup(formControls);
  }

}
