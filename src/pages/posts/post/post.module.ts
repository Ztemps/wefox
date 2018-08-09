import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [PostComponent],
    exports: [],
    providers: []
})
export class PostModule { }
