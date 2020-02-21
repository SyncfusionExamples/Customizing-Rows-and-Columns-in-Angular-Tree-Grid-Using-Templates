import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  TreeGridModule,
  DetailRowService
} from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [DetailRowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
