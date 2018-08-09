import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [HomeModule, PostsModule],
  declarations: [],
  providers: []
})
export class PagesModule {}
