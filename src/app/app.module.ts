import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import {Routingmodule, routing} from './routing';


@NgModule({
  declarations: [
    AppComponent,
   routing

  ],
  imports: [
    BrowserModule, Routingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
