import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModule } from '../shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    PagesModule,
    SharedModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
