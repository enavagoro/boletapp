import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  updateEnterprise(){
    console.log('tienes que ingresar la contraseña');
  }

}
