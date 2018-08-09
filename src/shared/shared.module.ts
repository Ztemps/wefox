import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BsModalRef, ModalModule } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, ModalModule, FormsModule],
  entryComponents: [ModalComponent],
  declarations: [],
  providers: [BsModalRef]
})
export class SharedModule {}
