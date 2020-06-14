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
import { FactureService } from './service/facture.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ClientComponent } from './components/client/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { FactureComponent } from './components/facture/facture.component';
import { ProduitComponent } from './components/produit/produit.component';
import { JournalComponent } from './components/journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    FactureComponent,
    ProduitComponent,
    JournalComponent,

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
