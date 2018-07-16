import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './components/second/shara/images';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import {Routingmodule, routing} from './routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   routing

  ],
  imports: [
    BrowserModule, Routingmodule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
