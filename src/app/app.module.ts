import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientService } from './service/client.service';
import { ProduitService } from './service/produit.service';
import { EditerClientComponent } from './components/editer-client/editer-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { EditerProduitComponent } from './components/editer-produit/editer-produit.component';
import { AfficherClientComponent } from './components/afficher-client/afficher-client.component';
import { AfficherProduitComponent } from './components/afficher-produit/afficher-produit.component';
import { FactureService } from './service/facture.service';
import { CreateFactureComponent } from './components/create-facture/create-facture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    EditerClientComponent,
    AddClientComponent,
    AddProduitComponent,
    EditerProduitComponent,
    AfficherClientComponent,
    AfficherProduitComponent,
    CreateFactureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [ClientService, ProduitService, FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
