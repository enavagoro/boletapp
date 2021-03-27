import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/buscar-patente',
      icon: 'home'
    },
    {
      title: 'Ventas',
      url: '',
      icon: 'pricetags'
    }
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor() {}

  ngAfterViewInit(){
    //Ocultar sidemenu
    var menu = document.querySelector('ion-menu');
    menu.hidden = true;
  }
}
