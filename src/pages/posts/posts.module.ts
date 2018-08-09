import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { PostsComponent } from './posts.component';

// Providers
import { PostsService } from './posts.service';
import { MainModalModule } from '../../shared/modal/modal.module';

@NgModule({
    imports: [
      SharedModule,
      MainModalModule
    ],
    declarations: [PostsComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
