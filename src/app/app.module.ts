import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; //Protocolo http para que los servicios se comuniquen con la api
//esto es para los formularios
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

//servicios

import { AuthService } from './_services/auth.service';
import { LoginService } from './_services/login.service';
import { ValidationService } from './_services/validation.service';
import { DataStorageService } from './_services/dataStorage.service';
import { ContactService } from './_services/contact.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxDocViewerModule ,HttpClientModule],
  providers: [
    AuthService,
    LoginService,
    DataStorageService,
    ValidationService,
    ContactService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
