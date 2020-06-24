import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FactureService } from 'src/app/service/facture.service';
import { LigneFactureService } from 'src/app/service/ligne-facture.service';
import { Facture } from 'src/app/model/facture';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/model/produit';
import { LigneFacture } from 'src/app/model/ligne-facture';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  @ViewChild('htmlData', {static:false}) htmlData:ElementRef;
   searchC ='';
   searchP='';
  constructor(private produitService:ProduitService,private clientService:ClientService,private factureService:FactureService,private ligneFactureService:LigneFactureService) { }
   ligneFactures =new Array<LigneFacture>();
  ngOnInit() {
    this.factureService.findAll();
    this.clientService.findAll();
    this.produitService.findAll();
  }

  public save(produits,client){
      const facture=new Facture();
      const ligneFactures = new Array<LigneFacture>();
    for(let i=0;i<produits.length;i++){
        let  qte= (<HTMLInputElement>document.getElementById(produits[i].codeBarre)).value;
        const ligneFacture = new LigneFacture();
        ligneFacture.produit=produits[i];
        ligneFacture.qteAchetee=Number(qte);
        ligneFactures.push(ligneFacture);
    }
    facture.ligneFactures=ligneFactures;
    facture.client=client;
    this.facture=facture;
    this.factureService.save();

 }
  public searchClient(){
     this.resultClients = this.clients
     .filter((client)=>client.code.toLowerCase().includes(this.searchC.toLowerCase()));
  }
  public searchProduit(){
     this.resultProduits = this.produits
    .filter((produit)=>produit.designation.toLowerCase().includes(this.searchP.toLowerCase()))
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jspdf('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('factures.pdf');
  }
  get produit ():Produit{
    return this.produitService.produit;
  }
  get produits ():Array<Produit>{
    return this.produitService.produits;
  }
  get resultProduits ():Array<Produit>{
    return this.produitService.copierProduits;
  }
  set resultProduits(val:Array<Produit>){
    this.produitService.copierProduits=val;
  }
  get client():Client{
    return this.clientService.client;
  }
  get clients():Array<Client> {
    return this.clientService.clients;
  }
  get resultClients():Array<Client> {
    return this.clientService.copierClients;
  }
  set resultClients(val:Array<Client>){
       this.clientService.copierClients=val;
  }
  get factures():Array<Facture> {
    return this.ligneFactureService.factures;
  }
  get facture():Facture {
    return this.factureService.facture;
  }
  set facture(facture:Facture) {
     this.factureService.facture=facture;
  }
  get alerts():Array<LigneFacture>{
    return this.factureService.alerts;
  }

}
