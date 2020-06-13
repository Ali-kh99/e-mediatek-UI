import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produit } from '../model/produit';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {
    private _produit:Produit;
    private  _produits:Array<Produit>;
    constructor(private http: HttpClient) { }

    public save() {
        this.http.post(`http://localhost:8080/e-mediatek/produit/`, this.produit).subscribe(
            data => {
                if (data > 0) {
                  this.produits.push(this.cloneProduit(this.produit));
                  this.produit = null;
                }
              }, eror => {
                console.log('eror');
              });
    }
    public saveProduit(produit) {
        this.http.post(`http://localhost:8080/e-mediatek/produit/`, produit).subscribe(err => {
            console.log(err);
        });
    }

    public delete(id: number) {
        this.http.delete(`http://localhost:8080/e-mediatek/produit/id/` + id);
    }

    public findAll() {
        this.http.get<Array<Produit>>(`http://localhost:5050/e-mediatek/produit/`).subscribe(
            data => {
                this.produits = data;
               }
        );
    }

    public findByCodeBarre(codeBarre: string) {
        this.http.get(`http://localhost:8080/e-mediatek/produit/codeBarre/` + codeBarre).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    public findByDesignation(designation: string) {
        this.http.get(`http://localhost:8080/e-mediatek/produit/designation/` + designation).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

       
    get produit(): Produit {
        if (this._produit == null){
          this._produit = new Produit();
        }
        return this._produit;
      }
    
      set produit(value: Produit) {
        this._produit = value;
      }

      get produits(): Array<Produit> {
        if (this._produits == null){
          this._produits = new Array<Produit>();
        }
        return this._produits;
      }
    
      set produits(value: Array<Produit>) {
        this._produits = value;
      }
      private cloneProduit(client: Produit) {
        const monProduit = new Produit();
        monProduit.codeBarre=client.codeBarre;
        monProduit.designation=client.designation;
        monProduit.prix=client.prix;
        monProduit.qteStock=client.qteStock;
        return monProduit;
      }
} 