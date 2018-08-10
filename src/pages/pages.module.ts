import { NgModule } from '@angular/core';
import { PostsModule } from './posts/posts.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [HomeModule, PostsModule],
  declarations: [],
  providers: []
})
export class PagesModule {}
