import { Component } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';
import { TextInputParams } from '../../../models/models';

@Component({
  selector: 'ngx-json-text',
  templateUrl: './text.component.html',
})
export class TextComponent extends BaseFieldComponent<TextInputParams> {
  get isTextArea() {
    return (
      (this.field.type === 'text' && this.field.multiline) ||
      this.field.type === 'textarea'
    );
  }
}
