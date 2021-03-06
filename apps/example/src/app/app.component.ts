import { Component, OnInit } from '@angular/core';
import { Fields } from 'ngx-json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-json-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  fields2: Fields = [];
  constructor(private http: HttpClient) {}
  data: any[] = [];
  submit(a: any) {
    this.data = [...this.data, a];
  }
  ngOnInit(): void {
    this.http
      .get<Fields>('https://localhost:5001/meta')
      .subscribe((a) => (this.fields2 = a));
  }
}
