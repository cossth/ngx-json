import { Directive, ElementRef, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngDynamicForm]',
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit')
    .pipe(tap(() => {
      if (this.element.classList.contains('submitted') === false) {
        this.element.classList.add('submitted');
      }
    }), shareReplay(1))
 ;

  constructor(private host: ElementRef<HTMLFormElement>) {
    host.nativeElement['submit$'] = this.submit$;
  }

  get element() {
    return this.host.nativeElement;
  }

}
