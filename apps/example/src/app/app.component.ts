import { Component, OnInit } from '@angular/core';
import { Fields } from '@cossth/ng-dynamic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-dynamic-form-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  fields2: Fields = [];
  constructor(private http: HttpClient) {}
  submit = console.log;
  ngOnInit(): void {
    this.http
      .get<Fields>('https://localhost:5001/meta')
      .subscribe((a) => (this.fields2 = a));
  }
}
