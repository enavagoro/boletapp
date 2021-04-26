import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../_services/login.service';
import { ValidationService } from '../_services/validation.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    let codigoEnter = 13;

    if(event.keyCode == codigoEnter){
      this.login();
    }
  }

  loginForm;
  
  urls = [
    'https://64.media.tumblr.com/6f5668f773c58e50d8fe4bb8983c4c92/fd37d9590868cae9-e8/s1280x1920/4fb613bdc6dbb0e133ed627317c62161e4409b76.jpg',
    'https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png'];
  
  constructor(private loginService: LoginService,
              private authService: AuthService,
              private router:Router,
              public alertController:AlertController,
              private formBuilder:FormBuilder) { 
                this.loginForm = this.formBuilder.group({
                  email : ['',[Validators.required,ValidationService.emailValidator]],
                  password : ['',Validators.required]
                }); 
              }

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

  test(){
    console.log('this.loginForm.value::',this.loginForm.value);
  }

  login(){
    this.authService.logUser(this.loginForm.value).then(service=>{
      service.subscribe(d=>{
        console.log(d);
        this.loginService.setToken(d['accessToken']);
        this.loginService.getUser(this.loginForm.value).then(logService=>{
          logService.subscribe(r=>{
            console.log('yo soy r',r);
            for(var user of r){
              user.token = d['accessToken'];
              this.loginService.setUser(user);
              this.loginService.setEnterprise(user.enterpriseId);
              this.router.navigate(['calculator'], {replaceUrl: true});
              var tabs = document.querySelector('ion-tab-bar');
              tabs.hidden = false;
              break;
            }
          })
        })
      },err=>{
        this.errorAlert();
      })
    })
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Error al iniciar',
      message: 'Tu dirección de correo electrónico o tu contraseña no son correctos',
      buttons: ['OK']
    });
    await alert.present();
  }
}
