import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { PostsComponent } from './posts.component';


@NgModule({
    imports: [SharedModule],
    declarations: [PostsComponent],
    exports: [],
    providers: []
})
export class PostsModule { }
