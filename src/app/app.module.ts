import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateValidPipe } from './date-valid.pipe';
import { GetNumberPipe } from './get-number.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DateValidPipe, GetNumberPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
