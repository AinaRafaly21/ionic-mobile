import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchatOffreService {

  constructor(private http : HttpClient) { }

  public acheter(offre : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    console.log("OOFFFFRRREEEEEE :", offre);
    return this.http.post(BASE_URL + 'achat-offre', offre, { headers : headers } );
  }
}
