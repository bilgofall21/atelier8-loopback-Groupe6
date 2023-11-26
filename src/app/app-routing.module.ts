import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './voiture/voiture.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'voiture', component: VoitureComponent },
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
