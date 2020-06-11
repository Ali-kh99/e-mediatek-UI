import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientService } from './client.service';
import { ProduitService } from './produit.service';
import { EditerClientComponent } from './editer-client/editer-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditerProduitComponent } from './editer-produit/editer-produit.component';
import { AfficherClientComponent } from './afficher-client/afficher-client.component';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { FactureService } from './facture.service';

@NgModule({
  declarations: [
    AppComponent,
    EditerClientComponent,
    AddClientComponent,
    AddProduitComponent,
    EditerProduitComponent,
    AfficherClientComponent,
    AfficherProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService, ProduitService, FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
