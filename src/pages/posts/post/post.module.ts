import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { SharedModule } from '../../../shared/shared.module';
import { PostService } from './post.service';

@NgModule({
    imports: [SharedModule],
    declarations: [PostComponent],
    exports: [],
    providers: [PostService]
})
export class PostModule { }
