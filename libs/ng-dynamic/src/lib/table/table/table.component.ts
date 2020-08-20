import { Component, OnInit, Input } from '@angular/core';
import { Fields } from '../../models';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'ng-dynamic-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input() formfields: Fields = [];
  @Input() data: any[] = [];
  
  constructor() { }

  ngOnInit(): void { 
  }

}
