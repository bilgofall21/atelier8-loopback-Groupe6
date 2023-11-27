import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:string='';
  password:string='';
  admin:any={};
  http: any;
  userConnect: any;

  constructor(private userService: UserService, private route:Router){}
  ngOnInit(){
    this.getUsers()
  }
  getUsers(){
    this.userService.getUser().subscribe((reponse:any)=>{
      this.admin=reponse;
      console.log(this.admin)
    })
  }
  // fonction qui gere la connexion
  login() {
    //  On verifie si les champs contiennent de l'information 
   this.userConnect=this.admin.find((element:any)=>element.email==this.email && element.password==this.password);
   if( this.userConnect){
    this.verifInfos("Felicitations!", "Connexion faite avec succes", "success");
    this.route.navigate(['voiture', this.userConnect.userId])
   }else if (this.email == "" || this.password == ""){
    this.verifInfos("Oops!", "Ce compte n'existe pas", "error");
    
   }
 }


 
 
  // Fonction pour afficher un sweetalert 
 verifInfos(title: any, text: any, icon: any) {
   Swal.fire({
     title: title,
     text: text,
     icon: icon
   })
 }

}


