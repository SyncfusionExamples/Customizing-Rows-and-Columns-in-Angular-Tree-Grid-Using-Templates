import { Component, OnInit } from '@angular/core';
import { textdata, sampleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

var I18n: Internationalization = new Internationalization();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];

  ngOnInit(): void {
    //this.data = textdata; //Uncomment for Row, Column template sample data
    this.data = sampleData; //Uncomment for Column Condition template & ValueAccessor sample data
  }

  public format(value: Date): string {
    return I18n.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }

  percentageFormatter(field: string, data: Object, column: Object): string {
    if (typeof data['progress'] != 'undefined') return data['progress'] + '%';
    else return '';
  }
}