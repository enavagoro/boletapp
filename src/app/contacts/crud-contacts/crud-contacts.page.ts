import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController,AlertController,ActionSheetController, NavParams} from '@ionic/angular';
import { ContactService } from '../../_services/contact.service';

@Component({
  selector: 'app-crud-contacts',
  templateUrl: './crud-contacts.page.html',
  styleUrls: ['./crud-contacts.page.scss'],
})
export class CrudContactsPage implements OnInit {
  contact = {};
  crudValue = 1;

  constructor(private modalCtrl : ModalController,private navParams : NavParams,private alertController : AlertController, private contactService:ContactService) {
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

  refrescar(event) {
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  public saveContact(){
    //console.log('entra');
    this.contactService.insert(this.contact).subscribe(contact=>{
      //console.log('entra2');
      //this.ngOnInit();
      this.contact = {};
      this.closeModal();
    })
  }

  public updateContact(){
    this.contactService.update(this.contact['_id'],this.contact).subscribe(contact=>{
      //console.log(contact);
      //this.ngOnInit();
      this.closeModal();
      this.contact = {};
    })
  }

  async confirmCreate() {
    //console.log(this.contact);

    const alert = await this.alertController.create({
      header: 'Favor confirmar!',
      message: 'Estas a punto de <br><strong>CREAR UN CONTACTO</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.saveContact();
          }
        }
      ]
    });

    await alert.present();
  } 
  
  async confirmUpdate() {
    //console.log(this.contact);

    const alert = await this.alertController.create({
      header: 'Favor confirmar!',
      message: 'Estas a punto de <br><strong>CREAR UN CONTACTO</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.updateContact();
          }
        }
      ]
    });

    await alert.present();
  }

  readContact(){
    console.log('contact',this.contact);
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
