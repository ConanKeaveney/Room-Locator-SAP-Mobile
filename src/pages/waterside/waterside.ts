import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the WatersidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waterside',
  templateUrl: 'waterside.html',
})
export class WatersidePage {



  constructor(public modalCtrl : ModalController,public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider ) {
    this.generateTopics();
   
  }
  topics: string[];

  

  openModal(topic){ //pop up for map
    var myData={
      name :topic
    };
    var myModal = this.modalCtrl.create('ModalPage' ,{data :myData});
    
    myModal.present();

  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatersidePage');
  }
  generateTopics() {
    this.topics = [  
    ];
  }

  getTopics(ev: any) {
    this.generateTopics();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.topics = this.topics.filter((topic) => {
        return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  gotomap(topic){
    console.log(topic);
  }

}
