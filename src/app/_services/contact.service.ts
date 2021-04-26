import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})

export class ContactService {  
  private url: string = "http://localhost:8080";  
  constructor(private http:HttpClient,private login:LoginService) {    
  }

  async list() {    
    return this.http.get<any[]>(`${this.url}/contact/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , this.login.getToken())
      .set('userId' , this.login.getUserId())
      .set('enterpriseId' , this.login.getEnterprise())   
    });
  }
  getOne(id){
    return this.http.get<any[]>(`${this.url}/contact/${id}` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , this.login.getToken())
      .set('userId' , this.login.getUserId())
      .set('enterpriseId' , this.login.getEnterprise())     
    });
  }
  update(id,contact){
    delete contact.__v;
    return this.http.patch<any[]>(`${this.url}/contact/${id}` , contact,{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , this.login.getToken())
      .set('userId' , this.login.getUserId())
      .set('enterpriseId' , this.login.getEnterprise())   
    });
  }
  insert(contact){
    contact.status = true;
    return this.http.post<any[]>(`${this.url}/contact/` ,contact, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , this.login.getToken())
      .set('userId' , this.login.getUserId())
      .set('enterpriseId' , this.login.getEnterprise())         
    });
  }

}
