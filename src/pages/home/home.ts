import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl : ModalController) {
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


  generateTopics() {
    this.topics = [
     'An Craobh Ruadh',
     'Aonghus Og',
     'Bran Agus Sieolaing',
     'Brugh Na Boinne',
     'Cu Chulainn',
     'Oisin',
     'Muirne',
     'Na Fianna',
     'Nas Na Riogh',
     'Nuada',
     'Setanta (Telepresence Room)',
     'Training Room One',
     'Training Room Two',
     'Canteen',
     'Human Resources',
     'Tuan Mac Carrel',
     'First Finger',
     'Middle Finger',
     'End Finger',
     'Cath Chnucha',
     'Lia Fail',
     'Gaoth Domhair',
     'Creidhne',
     'Grainne Mhaol',
     'Fionn MacCumahaill',
     'Mullach Ide',
     'An Tain',
     'Fir Blog',
     'Cormaic Mac Airt',
     'War Room',
     'Clan Chaoilte',
     'Teamhair',
     'An Bradan Freasa',
     'COL'
     
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
