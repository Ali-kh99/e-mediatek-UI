import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/service/facture.service';
import { LigneFactureService } from 'src/app/service/ligne-facture.service';
import { Facture } from 'src/app/model/facture';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/model/produit';
import { LigneFacture } from 'src/app/model/ligne-facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor(private produitService:ProduitService,private clientService:ClientService,private factureService:FactureService,private ligneFactureService:LigneFactureService) { }
   ligneFactures =new Array<LigneFacture>();
  ngOnInit() {
    this.factureService.findAll();
    this.clientService.findAll();
    this.produitService.findAll();
  }
  public ajoutProduit(pro,qte){
    console.log(pro);
    console.log(qte);
  }
  get produit ():Produit{
    return this.produitService.produit;
  }
  get produits ():Array<Produit>{
    return this.produitService.produits;
  }
  get client():Client{
    return this.clientService,this.client;
  }
  get clients():Array<Client> {
    return this.clientService.clients;
  }
  get factures():Array<Facture> {
    return this.ligneFactureService.factures;
  }
  get facture():Facture {
    return this.factureService.facture;
  }
}
