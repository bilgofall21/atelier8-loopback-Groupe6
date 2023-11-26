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
  auto: any;

 

  
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

  ajoutVoiture(){
    this.voitureService.ajouterVoiture(this.auto).subscribe((data:any)=>{
      this.auto={
        marque:this.marque,
        prix:this.prix,
        image:this.imageUrl,
        desciption:this.description 
      }
      this.voitures.push(this.auto)
      
      
    })
  }

  


}
