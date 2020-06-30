import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/model/produit';
import { InventaireProduitsVendus } from 'src/app/model/invProduits';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
    showForm=false;
    pEdit =new Produit();
    searchP ='';
  constructor(private produitService:ProduitService) { }

  ngOnInit() {
     this.produitService.findAll();
  }
  public searchProduit(){
    this.resultProduits = this.produits
    .filter((produit)=>produit.codeBarre.toLowerCase().includes(this.searchP.toLowerCase()));
    this.resultInventaireProduitsVendus = this.inventaireProduitsVendus
    .filter((inv)=>inv.produit.codeBarre.toLowerCase().includes(this.searchP.toLowerCase()));
 }
   
  
  public edit(produit:Produit){
    this.pEdit=produit;
    this.showForm=true;
  }
  public upDate(produit:Produit){
    this.produitService.update(produit);
    this.showForm=false;
  }
  public save(){
    this.produitService.save();
  }
  public delete(id){
    this.produitService.delete(id);
  }
  get produit(): Produit {
    return  this.produitService.produit;
  }
  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

  get inventaireProduitsVendus(): Array<InventaireProduitsVendus> {
      return this.produitService.inventaireProduitsVendus;
  }
  get resultInventaireProduitsVendus(): Array<InventaireProduitsVendus> {
    return this.produitService.copierInventaireProduitsVendus;
   }
   set resultInventaireProduitsVendus(val:Array<InventaireProduitsVendus>){
    this.produitService.copierInventaireProduitsVendus=val;
}
  get resultProduits():Array<Produit> {
    return this.produitService.copierProduits;
  }
  set resultProduits(val:Array<Produit>){
       this.produitService.copierProduits=val;
  }
}
