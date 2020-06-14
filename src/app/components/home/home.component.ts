import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produitService:ProduitService) { }

  ngOnInit() {
     this.produitService.findAll();
  }
  
  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

}
