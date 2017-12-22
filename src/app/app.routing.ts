import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRouting: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
