import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {ThirdComponent} from './components/third/third.component';

const routes: Routes = [


  {path: 'first', component : FirstComponent},
  {path: 'second', component : SecondComponent},
  {path: 'third', component : ThirdComponent }
];
@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Routingmodule {

}
export const routing = [FirstComponent, SecondComponent, ThirdComponent]
