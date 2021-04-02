import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http : HttpClient) { }

  findOffre() : any{
    return this.http.get(BASE_URL + 'offre');
  }

  getOffre(id){
    return this.http.get(BASE_URL + 'offre/' + id);
  }

  getOffreDetails(id){
    return this.http.get(BASE_URL + 'offre-details/' + id);
  }
}
