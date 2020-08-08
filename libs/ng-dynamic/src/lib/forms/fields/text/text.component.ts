import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface TextInputParams {
  value: string;
  name: string;
  type: 'text';
}

@Component({
  selector: 'ng-dynamic-form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() field: TextInputParams;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }
}
