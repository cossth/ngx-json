import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputParams } from '../../models/input-params';

@Component({
  template: ''
})
export abstract class BaseFieldComponent<T extends InputParams>  {
  @Input() field: T;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.label].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.label].dirty;
  }
}
