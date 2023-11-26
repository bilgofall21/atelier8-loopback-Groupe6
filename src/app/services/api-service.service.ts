import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class ApiServiceService {
  path:string='./voiture';

  url = 'http://[::1]:3000/voitures';

  constructor(private http: HttpClient) { }

  getVoiture() {
    return this.http.get(this.url);
  }
  
  ajouterVoiture(voiture:any){
    return this.http.post(this.url, voiture);
  }
}
