import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produit } from "../model/produit";
import { StringResponse } from "../model/StringResponse";
import { InventaireProduitsVendus } from "../model/invProduits";
import { Facture } from '../model/facture';
import { FactureService } from './facture.service';

@Injectable({
  providedIn: "root",
})
export class ProduitService {
  private _produit: Produit;
  private _produits: Array<Produit>;
  private _copierProduits: Array<Produit>;
  private _inventaireProduitsVendus: Array<InventaireProduitsVendus>;
  private _copierInventaireProduitsVendus: Array<InventaireProduitsVendus>;
  private _demande: StringResponse;
  constructor(private http: HttpClient) {}

  public save() {
    this.http
      .post<Produit>(`http://localhost:5050/e-mediatek/produit/`, this.produit)
      .subscribe(
        (data) => {
          if (data != null) {
            this.produit = this.cloneProduit(data);
            this.produits.push(this.produit);
            this.invProduitVendu(this.produit.codeBarre, this.produit);
            this.produit = null;
          }
        },
        (eror) => {
          console.log("eror");
        }
      );
  }
  public update(produit) {
    this.http
      .post(`http://localhost:5050/e-mediatek/produit/update`, produit)
      .subscribe((eror) => {
        console.log(eror);
      });
  }

  public delete(id: number) {
    this.http
      .delete(`http://localhost:5050/e-mediatek/produit/id/` + id)
      .subscribe(() => {
        this.produits = this.produits.filter((produit) => produit.id != id);
        this.inventaireProduitsVendus=this.inventaireProduitsVendus.filter((inv) => inv.produit.id!=id);
      });
  }

  public findAll() {
    this.http
      .get<Array<Produit>>(`http://localhost:5050/e-mediatek/produit/`)
      .subscribe((data) => {
        this.produits = data;
        this.copierProduits=data;
        this.invProduitsVendus();
      });
  }

  public findByCodeBarre(codeBarre: string) {
    this.http
      .get(`http://localhost:8080/e-mediatek/produit/codeBarre/` + codeBarre)
      .subscribe(
        (data) => {
          return data;
        },
        (err) => {
          console.log(err);
          return err;
        }
      );
  }

  public findByDesignation(designation: string) {
    this.http
      .get(
        `http://localhost:8080/e-mediatek/produit/designation/` + designation
      )
      .subscribe(
        (data) => {
          return data;
        },
        (err) => {
          console.log(err);
          return err;
        }
      );
  }

  public invProduitVendu(codeBarre: String, produit: Produit) {
    this.http
      .get<StringResponse>(
        `http://localhost:5050/e-mediatek/produit/demande/` + codeBarre
      )
      .subscribe(
        (data) => {
          //  this.demande= data;
          const invPsVs = new InventaireProduitsVendus();
          invPsVs.produit = produit;
          invPsVs.demande = data;
          this.inventaireProduitsVendus.push(invPsVs);
          this.copierInventaireProduitsVendus.push(invPsVs);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  public invProduitsVendus() {
    this.inventaireProduitsVendus.length=0;
    this.copierInventaireProduitsVendus.length=0;
    for (let i = 0; i < this.produits.length; i++) {
      this.invProduitVendu(this.produits[i].codeBarre, this.produits[i]);
    }
  }


  get demande(): StringResponse {
    if (this._demande == null) {
      this._demande = new StringResponse();
    }
    return this._demande;
  }

  set demande(value: StringResponse) {
    this._demande = value;
  }
  get produit(): Produit {
    if (this._produit == null) {
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if (this._produits == null) {
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
  get copierProduits(): Array<Produit> {
    if (this._copierProduits == null) {
      this._copierProduits = new Array<Produit>();
    }
    return this._copierProduits;
  }

  set copierProduits(value: Array<Produit>) {
    this._copierProduits = value;
  }


  private cloneProduit(produit: Produit) {
    const monProduit = new Produit();
    monProduit.codeBarre = produit.codeBarre;
    monProduit.designation = produit.designation;
    monProduit.prix = produit.prix;
    monProduit.qteStock = produit.qteStock;
    return monProduit;
  }
  get inventaireProduitsVendus(): Array<InventaireProduitsVendus> {
    if (this._inventaireProduitsVendus == null) {
      this._inventaireProduitsVendus = new Array<InventaireProduitsVendus>();
    }
    return this._inventaireProduitsVendus;
  }

  set inventaireProduitsVendus(value: Array<InventaireProduitsVendus>) {
    this._inventaireProduitsVendus = value;
  }
  get copierInventaireProduitsVendus(): Array<InventaireProduitsVendus> {
    if (this._copierInventaireProduitsVendus == null) {
      this._copierInventaireProduitsVendus = new Array<InventaireProduitsVendus>();
    }
    return this._copierInventaireProduitsVendus;
  }

  set copierInventaireProduitsVendus(value: Array<InventaireProduitsVendus>) {
    this._copierInventaireProduitsVendus = value;
  }
 
}
