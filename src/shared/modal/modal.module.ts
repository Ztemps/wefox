import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ModalModule } from '../../../node_modules/ngx-bootstrap';
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [
      SharedModule,
      ModalModule
    ],
    declarations: [ModalComponent]
})
export class MainModalModule {
}
