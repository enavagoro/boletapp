import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-crud-contacts',
  templateUrl: './crud-contacts.page.html',
  styleUrls: ['./crud-contacts.page.scss'],
})
export class CrudContactsPage implements OnInit {
  contact = {};
  crudValue = 1;

  constructor(
    private modalCtrl : ModalController,
    private navParams : NavParams) {
      var ct = navParams.get("contact");
      
      if(ct){
        this.contact = ct;
      }

      var v = navParams.get("value");

      if(v){
        this.crudValue = v;
        if(v==2 || v == "2"){
          console.log("esta actualizando");
        }
      }
    }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
