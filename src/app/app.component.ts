import { Component, OnInit } from '@angular/core';
import { textdata, sampleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';
import {
  TreeGridModule,
  DetailRowService
} from '@syncfusion/ej2-angular-treegrid';
import { CommonModule } from '@angular/common';

var I18n: Internationalization = new Internationalization();

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  providers: [DetailRowService],
  styleUrls: ['./app.component.css'],
  imports: [ TreeGridModule, CommonModule],
})
export class AppComponent implements OnInit {
  public data!: Object[];

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