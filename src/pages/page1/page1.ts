import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { HolaPage } from '../hola/hola';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    		
  }

		clicked(mensaje) {
   				 this.navCtrl.push(HolaPage, {   item: mensaje  });
  		} 

  }