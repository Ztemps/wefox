import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../shared/shared.module';

// Components
import { PostsComponent } from './posts.component';

// Providers
import { PostsService } from './posts.service';
import { MainModalModule } from '../../shared/modal/modal.module';
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
