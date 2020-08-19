import { Component, OnInit } from '@angular/core';
import { Fields, Field } from '@cossth/ng-dynamic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-dynamic-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
      label: 'Age',
      value: 18,
      type: 'number',
      name: 'age',
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
  fields2: Fields = [];
  constructor(private http: HttpClient){
  }
  submit = console.log;
  ngOnInit(): void {
    this.http.get<{properties :  Fields}[]>('https://localhost:5001/meta')
    .subscribe(a => (this.fields2 = a[0].properties));
  }
}
