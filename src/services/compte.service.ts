import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  getCompte(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    return this.http.get(BASE_URL + 'compte', { headers : headers});
  }

  getCompteCredit(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    return this.http.get(BASE_URL + 'compte-credit', { headers : headers});
  }
}
