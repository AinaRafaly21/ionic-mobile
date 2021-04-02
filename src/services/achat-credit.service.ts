import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchatCreditService {

  constructor(private http : HttpClient) { }

  public acheterCredit(credit : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    console.log("CREDDDIIIIIT :", credit);
    return this.http.post(BASE_URL + 'achat-credit', credit, { headers : headers });
  }
}
