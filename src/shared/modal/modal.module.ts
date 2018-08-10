import { LoaderModule } from './../loader/loader.module';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      LoaderModule
    ],
    exports: [ModalComponent],
    declarations: [ModalComponent]
})
export class MainModalModule {
}
