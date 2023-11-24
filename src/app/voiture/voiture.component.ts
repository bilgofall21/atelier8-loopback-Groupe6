import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  // attributs
  voitures: any[] = [];
  imageUrl: string = ""; 
  description: string = "";
  marque: string = "";
  prix: string = "";
  
  constructor(private voitureService: ApiServiceService) { }

  ngOnInit(): void {
    this.afficherVoiture();
  }
  
  afficherVoiture() {
    this.voitureService.getVoiture().subscribe((data:any) => {
      this.voitures = data;
      console.log(this.voitures);
    });
  }

  

  


}
