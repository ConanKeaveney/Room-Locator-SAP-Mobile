import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    
  }
 
  
  getTime() {
    this.restProvider.getLuasTime();
    console.log('method called');
  }

  getTimeBus() {
    this.restProvider.getBusTime();
    console.log(' bus method called');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiPage');
    this.getTime();
    this.getTimeBus();
  }

}
