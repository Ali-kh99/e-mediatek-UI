import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../service/produit.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent implements OnInit {

  produits: any;
  constructor(
    private http: HttpClient,
    private produitService: ProduitService) { }

  ngOnInit() {
    this.afficherProduit();
  }
  public afficherProduit() {
    this.http.get(`http://localhost:8080/e-mediatek/produit/`).subscribe(data => {
      this.produits = data;
    }, err => {
      console.log(err);
    });
    // this.produits = this.produitService.findAll();
  }
}
