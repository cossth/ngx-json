import {
  Directive,
  Self,
  OnChanges,
  OnInit,
  OnDestroy,
  Inject,
  Optional,
  Host,
  ComponentRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from '../errors';
import { Observable, EMPTY, merge } from 'rxjs';
import { FormSubmitDirective } from './form-submit.directive';
import { ControlErrorComponent } from '../components/control-error/control-error.component';
import { filter } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  submit$: Observable<Event>;
  ref: ComponentRef<ControlErrorComponent>;

  constructor(
    private vcr: ViewContainerRef,
    private control: NgControl,
    private cfr: ComponentFactoryResolver,
    @Optional() @Host() private form: FormSubmitDirective,
    @Inject(FORM_ERRORS) private errors
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }
  
  ngOnInit() {
    console.log(this.submit$, this.form, this.control.name)
    merge(this.submit$, this.control.valueChanges)
    .pipe(filter(_ => this.control.touched && this.control.dirty))
    .subscribe(() => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey] || this.errors['invalid'] ;
        const text = getError(controlErrors[firstKey]);
        this.setError(text);
        console.log(firstKey, text);
      } else if (this.ref) {
        this.setError(null);
      }
    });
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.cfr.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
