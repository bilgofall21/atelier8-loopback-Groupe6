import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  voitures: any;

  constructor(private voitureService: ApiServiceService){}
  ngOnInit() {
    this.afficherVoiture()
  }

  afficherVoiture() {
    this.voitureService.getVoiture().subscribe((data:any) => {
      this.voitures = data;
      console.log(this.voitures);
    });
  }

  

}
