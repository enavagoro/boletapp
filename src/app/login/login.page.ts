import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  urls = [
    'https://64.media.tumblr.com/6f5668f773c58e50d8fe4bb8983c4c92/fd37d9590868cae9-e8/s1280x1920/4fb613bdc6dbb0e133ed627317c62161e4409b76.jpg',
    'https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png'];
  
  constructor(private router:Router) { }

  ngOnInit() {
    console.log('aqui estoy');

    var tabs = document.querySelector('ion-tab-bar');
    tabs.hidden = true;
  }

  ngAfterViewInit(){
    //Ocultar sidemenu
    console.log('aqui estoy');
    var tabs = document.querySelector('ion-tab-bar');
    tabs.hidden = true;
  }

  login(){
    this.router.navigate(['calculator'], {replaceUrl: true});
    var tabs = document.querySelector('ion-tab-bar');
    tabs.hidden = false;
  }

}
