import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  login(utilisateur : any) : any{
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("UTILISSAAATEEEUR :", utilisateur);
    return this.http.post(BASE_URL + 'connexion', utilisateur, { headers : headers } );
  }

  logout(){
    let token = localStorage.getItem('token');
    console.log("TOKEEEEEEEENNNNN : ", token);
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    return this.http.post(BASE_URL + 'deconnexion', { headers : headers } );
  }
}
