import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController, AlertController,ActionSheetController} from '@ionic/angular';
import { CrudContactsPage } from './crud-contacts/crud-contacts.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage implements OnInit {
  receptors = [];
  seeAll = false;
  contacts = [];
  searchQuery = "";
  filteredContacts = [];

  constructor(private modalCtrl : ModalController, private alertController : AlertController, private actionSheetController:ActionSheetController) { }

  ngOnInit() {
    this.contacts = [
                      {name:'hola',rut:'19390374-6',id:'1',status:true},
                      {name:'mila',rut:'18940756-7',id:'2',status:true},
                      {name:'cala',rut:'6202204-1',id:'3',status:false}
                    ]

    this.filteredContacts = this.contacts;
  }

  filterContacts(){
    var contacts = [];
    for(let i = 0 ; i < this.filteredContacts.length ; i ++){
      if(this.filteredContacts[i].status){ /* && i < this.cantidadVisible */
        contacts.push(this.filteredContacts[i]);
      }
    }
    return contacts;
  }

  filterDesactivated(){
    var contacts = [];
    for(let i = 0 ; i < this.filteredContacts.length ; i ++){
      if(!this.filteredContacts[i].status){
        contacts.push(this.filteredContacts[i]);
      }
    }
    return contacts;
  }

  filter(ev){
    console.log(this.searchQuery);
    if(this.searchQuery){          
      var filteredValues = [];
      for(var contact of this.contacts){
        for(var index in contact){
          if(contact[index].toString().toLowerCase().includes(this.searchQuery.toLowerCase())){
            filteredValues.push(contact);
            break;
          }
        }
      }
    }
    this.filteredContacts = filteredValues;
    if(this.searchQuery.trim() == ''){
      this.filteredContacts = this.contacts;          
    }
  }

  async options(contact) {
    var option = "Borrar";

    if(contact.status == 0){
      option = "Recuperar"
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver',
        icon: 'eye',
        handler: () => {
          this.addContact(1);
        }
      },{
        text: 'Actualizar',
        icon: 'sync',
        handler: () => {
          this.editContact(contact,2);
        }
      },{
        text: option,
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          if(contact.status == 0){
            this.confirmDelete('recuperar',contact);
          }
          else{
            this.confirmDelete('borrar',contact);            
          }
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
  }

  /* modales */

  async editContact(contact,value) {
    const modal = await this.modalCtrl.create({
      component: CrudContactsPage,
      cssClass: 'modals',
      componentProps:{
        'contact' : contact,
        'value' : value
      }
    });

    modal.onDidDismiss().then(modal=>{
      console.log("haciendo pruebas");
      this.ngOnInit();
    });

    return await modal.present();
  }

  async addContact(value) {
    const modal = await this.modalCtrl.create({
        component: CrudContactsPage,
        cssClass: 'modals',
        componentProps:{
          'value' : value
        }
    });

    modal.onDidDismiss().then(modal=>{
      console.log("haciendo pruebas");
      this.ngOnInit();
    });

    return await modal.present();
  }

  async confirmDelete(option,contact) {
    //console.log(this.cliente);
    contact;

    const alert = await this.alertController.create({
      header: 'Favor confirmar!',
      message: 'Estas a punto de <br><strong>'+option+' UN CONTACTO</strong>!!!',
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
            7//this.deleteAndRecovery(option,contact);
          }
        }
      ]
    });

    await alert.present();
  }
}
