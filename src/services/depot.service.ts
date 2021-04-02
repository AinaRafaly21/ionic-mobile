import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http : HttpClient) { }

  public deposer(depot : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    console.log("DEPPPPPOOOOOT :", depot);
    return this.http.post(BASE_URL + 'depot', depot, { headers : headers } );
  }
}
