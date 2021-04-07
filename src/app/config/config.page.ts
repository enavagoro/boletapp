import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../_services/dataStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  enterprise = {
    name: 'Juanito y Asociados',
    rut: '20300300-6',
    folio: '123456',
  }

  constructor(private dataStorage: DataStorageService,private router:Router,) { }

  ngOnInit() {
    var val = this.dataStorage.get('user');
    if(val){
      console.log('este es el val',val);
    }
    else{
      this.router.navigate(['/login'], {replaceUrl: true});
    }
  }

  logOut(){
    this.dataStorage.clear();
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  updateEnterprise(){
    console.log('tienes que ingresar la contraseña');
  }

}
