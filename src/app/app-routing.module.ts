import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  { path: 'voiture', component: VoitureComponent },
  {path:'', redirectTo:'voiture', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
