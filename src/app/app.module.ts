
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
