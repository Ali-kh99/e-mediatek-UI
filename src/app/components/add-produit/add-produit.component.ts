import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../service/produit.service';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  produit: Produit = new Produit();
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
  }

  public save() {
    console.log(this.produit);
    this.produitService.saveProduit(this.produit);
  }

}
