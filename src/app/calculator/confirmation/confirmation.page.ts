import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  testValue = 0;

  constructor(
    private modalCtrl : ModalController,
    private navParams : NavParams) {
      var v = navParams.get("value");
      if(v){
        this.testValue = v;
      }
  }

    ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  /* confirmación por si quieres no cancelar*/
}
