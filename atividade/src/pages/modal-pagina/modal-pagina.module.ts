import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPaginaPage } from './modal-pagina';

@NgModule({
  declarations: [
    ModalPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPaginaPage),
  ],
})
export class ModalPaginaPageModule {}
