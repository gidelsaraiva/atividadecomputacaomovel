import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ModalPaginaPage } from '../modal-pagina/modal-pagina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parametro:any;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController) { }

  exibirAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      buttons: [
        {
          text: 'Okay'
        },
        {
          text: 'Cancelar'
        }
      ]
    });
    alert.present();
  }

  exibirModal(){
    let modal = this.modalCtrl.create(ModalPaginaPage);
    modal.present();
  }

  irNovaPagina(){
    this.navCtrl.push('NovaPaginaPage');
  }

  enviarParametro(){
    this.navCtrl.push('ParametroPaginaPage', {parametro:this.parametro});
  }

}
