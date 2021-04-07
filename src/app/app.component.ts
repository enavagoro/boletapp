import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  /*
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
  ];*/
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor(private router: Router) {}

  ngAfterViewInit(){
    //Ocultar sidemenu

  }

  navigateToContacts(){
    console.log('navegé a contactos')
    this.router.navigate(['/contacts'], {replaceUrl: true});
  }

  navigateTo(value){
    console.log('navegé a contactos')
    this.router.navigate([value], {replaceUrl: true});
  }
}
