import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [BrowserAnimationsModule, SharedModule],
    declarations: [HomeComponent],
    exports: [],
    providers: []
})
export class HomeModule { }
