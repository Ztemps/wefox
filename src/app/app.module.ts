import { NgModule } from '@angular/core';

// Modules
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true}),
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
