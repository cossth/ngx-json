import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './forms/form/form.component';
import { SelectComponent } from './forms/fields/select/select.component';
import { TextComponent } from './forms/fields/text/text.component';
import { CheckboxComponent } from './forms/fields/checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormComponent, SelectComponent, TextComponent, CheckboxComponent],
  exports: [FormComponent],
  providers: [],
})
export class NgDynamicModule {}
