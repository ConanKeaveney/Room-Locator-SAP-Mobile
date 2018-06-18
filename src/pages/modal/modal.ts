import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  room: string[];
  imgpath: string;


  public closeModal(){

    this.viewCtrl.dismiss();

  }

  ionViewWillLoad() {
    var data=this.navParams.get('data');
    var imagepath='assets/imgs/'+data.name+'.png';
    console.log(imagepath);
    this.room=data.name;
    this.imgpath=imagepath;
    
    
  }

}
