import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './forms/form/form.component';
import { SelectComponent } from './forms/fields/select/select.component';
import { TextComponent } from './forms/fields/text/text.component';
import { CheckboxComponent } from './forms/fields/checkbox/checkbox.component';
import { RadioComponent } from './forms/fields/radio/radio.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormComponent, SelectComponent, TextComponent, CheckboxComponent, RadioComponent],
  exports: [FormComponent],
  providers: [],
})
export class NgDynamicModule {}
