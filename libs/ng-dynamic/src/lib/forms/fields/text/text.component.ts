import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputParams } from '../../form/form.component';
import { BaseFieldComponent } from '../base-field.component';

export type TextInputParams =
  | (InputParams & {
      type: 'password' | 'email' | 'text';
      multiline?: boolean;
    })
  | (InputParams & { type: 'textarea'; lines: number });

@Component({
  selector: 'ng-dynamic-form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent extends BaseFieldComponent<TextInputParams> {
  get isTextArea() {
    return (
      (this.field.type === 'text' && this.field.multiline) ||
      this.field.type === 'textarea'
    );
  }
}
