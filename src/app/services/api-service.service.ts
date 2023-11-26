import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class ApiServiceService {
  

  url = 'http://[::1]:3000/voitures';

  constructor(private http: HttpClient) { }

  getVoiture() {
    return this.http.get(this.url);
  }
  
  ajouterVoiture(voiture:any){
    return this.http.post(this.url, voiture);
  }

  modifierVoiture(id:any, voiture:any){
    return this.http.put(`${this.url}/${id}`, voiture)
  }
 

  supprimerVoiture(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
