import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client/client.component';
import { ProduitComponent } from './components/produit/produit.component';
import { FactureComponent } from './components/facture/facture.component';
import { JournalComponent } from './components/journal/journal.component';
const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'client' , component : ClientComponent},
  {path : 'produit' , component : ProduitComponent},
  {path : 'facture' , component : FactureComponent},
  {path : 'journalisation' , component : JournalComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
