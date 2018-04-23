import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParametroPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametro-pagina',
  templateUrl: 'parametro-pagina.html',
})
export class ParametroPaginaPage {

  parametro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {    
      this.parametro = this.navParams.get('parametro');    
  }  

}
