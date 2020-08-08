import { Component } from '@angular/core';
import { Fields } from '@cossth/ng-dynamic';

@Component({
  selector: 'ng-dynamic-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fields : Fields= [
    { name: 'Username', value: 'Shubham',type: 'text' },
    { name: 'Password', value: 'cossth' ,type: 'text'},
  ];
}
