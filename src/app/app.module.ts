import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorpickercompComponent } from './colorpickercomp/colorpickercomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpickercompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
