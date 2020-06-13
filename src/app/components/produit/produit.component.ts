import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService:ProduitService) { }

  ngOnInit() {
     this.produitService.findAll();
  }
  get produit(): Produit {
    return  this.produitService.produit;
  }
  get produits(): Array<Produit> {

    return this.produitService.produits;
  }
}
