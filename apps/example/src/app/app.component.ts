import { Component } from '@angular/core';
import { Fields } from '@cossth/ng-dynamic';

@Component({
  selector: 'ng-dynamic-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fields: Fields = [
    {
      label: 'Email',
      value: 'email@email.com',
      type: 'email',
      name: 'email',
      required: true,
    },
    {
      label: 'Username',
      value: 'Shubham',
      type: 'text',
      name: 'username',
      required: true,
    },
    {
      label: 'Username',
      value: 'Shubham',
      type: 'text',
      name: 'username',
      required: true,
    },
    { label: 'Password', value: 'cossth', type: 'password', name: 'password' },
    { label: 'Require', value: false, type: 'checkbox', name: 'check' },
    {
      label: 'Radio',
      type: 'radio',
      name: 'radio',
      value:2,
      options: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
      ],
    },
    {
      type: 'select',
      label: 'Select Label',
      multiselect: true,
      name: 'select',
      value: 2,
      options: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
      ],
    },
  ];
  submit = console.log;
}
