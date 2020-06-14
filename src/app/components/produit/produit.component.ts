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
  constructor(private produitService:ProduitService) { }

  ngOnInit() {
     this.produitService.findAll();
  }
  
  public edit(produit:Produit){
    console.log(produit);
    this.pEdit=produit;
    console.log(this.pEdit);

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
}
