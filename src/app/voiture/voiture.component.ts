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
  voitureChoisi: any;
  idVoiture:any;


  
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
    this.auto={
      marque:this.marque,
      prix: parseInt(this.prix),
      image:this.imageUrl,
      description:this.description 
    }
    this.voitureService.ajouterVoiture(this.auto).subscribe((data:any)=>{
    window.location.reload();
        
    })
  }

  chargerInfo(id: any) {
    this.voitures.forEach(element => {
      if (element.idVoiture == id) {
        this.voitureChoisi=element
        this.marque = element.marque;
        this.description = element.description;
        this.prix = element.prix;
        this.imageUrl = element.image;
      }
    });
  }

  modifVoiture(){
    
   let newVoiture={
      marque:this.marque,
      prix:parseInt(this.prix),
      image:this.imageUrl,
      description:this.description
    }
    this.voitureService.modifierVoiture(this.voitureChoisi.idVoiture, newVoiture) .subscribe((reponse:any)=>{
      console.log(`modification reussi : ${reponse}`);
      window.location.reload()
    }) 
  }

  suppression(id: any) {
    this.voitureService.supprimerVoiture(id).subscribe(
      (reponse:any) => {
        console.log(`Suppression de ${reponse.prix} reussie !`);
      })
    window.location.reload();
  }

  


}
