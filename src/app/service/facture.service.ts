import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Facture } from '../model/facture';
import { LigneFactureService } from './ligne-facture.service';

@Injectable({
    providedIn: 'root'
})
export class FactureService {
    private _facture:Facture;
    private  _Factures:Array<Facture>;
    constructor(private http: HttpClient,private ligneFactureService:LigneFactureService) { }

    public saveFacture() {
        this.http.post(`http://localhost:8080/e-mediatek/facture/`, this.facture).subscribe(
            data => {
                if (data > 0) {
                  this.factures.push(this.cloneFacture(this.facture));
                  this.facture = null;
                }
              }, eror => {
                console.log('eror');
              });
    }

    public delete(id: number) {
        this.http.delete(`http://localhost:8080/e-mediatek/facture/id/` + id);
    }

    public findAll() {
        this.http.get<Array<Facture>>(`http://localhost:5050/e-mediatek/facture/`).subscribe(
            data => {
               this.factures = data;
                this.ligneFactureService.FacturesWithfindProduits(this.factures);
              },
        );
    }
   

   

    public findByNumeroFacture(numeroFacture: string) {
        this.http.get(`http://localhost:8080/e-mediatek/facture/numeroFacture/` + numeroFacture).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    public findByDateFacturation(dateFacturation: Date) {
        this.http.get(`http://localhost:8080/e-mediatek/facture/designation/` + dateFacturation).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    
    get facture(): Facture {
        if (this._facture == null){
          this._facture = new Facture();
        }
        return this._facture;
      }
    
      set facture(value: Facture) {
        this._facture = value;
      }

      get factures(): Array<Facture> {
        if (this._Factures == null){
          this._Factures = new Array<Facture>();
        }
        return this._Factures;
      }
    
      set factures(value: Array<Facture>) {
        this._Factures = value;
      }
      private cloneFacture(facture: Facture) {
        const monFacture = new Facture();
        monFacture.client=facture.client;
        monFacture.dateFacturation=facture.dateFacturation;
         monFacture.numeroFacture=facture.numeroFacture;
        return monFacture;
      }
} 