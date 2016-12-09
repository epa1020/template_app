import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Hola page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hola',
  templateUrl: 'hola.html'
})
export class HolaPage {
titulo:string;
item:string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  	this.titulo="Hola desde TS";
  	this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('Hello HolaPage Page');
  }

}
