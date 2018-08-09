import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BsModalRef, ModalModule } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NoimagePipe } from './pipes/no-image.pipe';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASUKcLzA507XzEpJfqeoNjojw6GXrJMCc'
    })
  ],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, ModalModule, FormsModule, AgmCoreModule, NoimagePipe],
  entryComponents: [ModalComponent],
  declarations: [NoimagePipe],
  providers: [BsModalRef]
})
export class SharedModule {}
