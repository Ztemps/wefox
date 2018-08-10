import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainModalModule } from '../../shared/modal/modal.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { PostModule } from './post/post.module';

@NgModule({
    imports: [
      SharedModule,
      MainModalModule,
      PostModule
    ],
    declarations: [PostsComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
