import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http : HttpClient) { }
  
  findType() : any{
    return this.http.get(BASE_URL + 'type-offre');
  }

  public simuler(simulation : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type","application/json").set('Authorization', token);
    console.log("SIMMMUUUULATTIOOONN :", simulation);
    return this.http.post(BASE_URL + 'consommation', simulation, { headers : headers });
  }
}
