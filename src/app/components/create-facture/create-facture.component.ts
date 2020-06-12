import { Component, OnInit } from '@angular/core';
import { Facture } from '../../model/facture';
import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Produit } from 'src/app/model/produit';
import { LigneFacture } from 'src/app/model/ligne-facture';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {


  client: Client = new Client();
  clients: any;
  prods: [];
  produits: any;
  produit: Produit = new Produit();

  facture: Facture = new Facture();
  ligneFacture: LigneFacture = new LigneFacture();

  ligneFactures = new Array<LigneFacture>();

  i: number;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(`http://localhost:8080/e-mediatek/client/`).subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    }, err => {
      console.log(err);
    });

    this.http.get(`http://localhost:8080/e-mediatek/produit/`).subscribe(data => {
      this.produits = data;
      console.log(this.clients);
    }, err => {
      console.log(err);
    });
  }

  public ajouterLIgneFact() {
    // this.prods.forEach(pro=> {
    //   produit = new Produit();

    // });
    // this.ligneFacture.produit = this.produit;
    // this.ligneFacture.facture = this.facture;
    // this.facture.ligneFacture.push(this.ligneFacture);
    // this.produit.ligneFacture.push(this.ligneFacture);
    // this.facture.client = this.client;
  }

  public save() {
    console.log(this.client);
    this.ligneFactures = new Array<LigneFacture>();
    this.prods.forEach(pro => {
      this.produit = new Produit();
      this.produit.designation = pro;
      this.ligneFacture = new LigneFacture();
      this.ligneFacture.produit = this.produit;
      this.ligneFactures.push(this.ligneFacture);
      console.log(this.ligneFacture);
      console.log(this.ligneFactures);
    });
    console.log(this.ligneFactures);
  }

}
