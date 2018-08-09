import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { PostComponent } from '../pages/posts/post/post.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:id', component: PostComponent},

];
