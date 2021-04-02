import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(private http : HttpClient) { }

  findOperateur() : any{
    return this.http.get(BASE_URL + 'operateur');
  }

  appeler(appel : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("APPPPPPPELLLLLL :", appel);
    return this.http.post(BASE_URL + 'effectuer-appel', appel, { headers : headers });
  }
}
