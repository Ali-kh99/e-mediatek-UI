import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Facture } from '../model/facture';
import { LigneFactureService } from './ligne-facture.service';
import { LigneFacture } from '../model/ligne-facture';

@Injectable({
    providedIn: 'root'
})
export class FactureService {
    private _facture:Facture;
    private  _Factures:Array<Facture>;
    private _alerts:Array<LigneFacture>;
    constructor(private http: HttpClient,private ligneFactureService:LigneFactureService) { }

    public save() {
        this.http.post<Facture>(`http://localhost:5050/e-mediatek/facture/`, this.facture).subscribe(
            data => {
              this.facture.dateFacturation=data.dateFacturation;
              this.facture.numeroFacture=data.numeroFacture;
              this.fs.push(this.facture);
              this.facture = null;
               if( data.ligneFactures!=null){
                 this.alerts=data.ligneFactures;
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
    
      set alerts(value: Array<LigneFacture>) {
        this._alerts = value;
      }

      get alerts(): Array<LigneFacture> {
        if (this._alerts == null){
          this._alerts = new Array<LigneFacture>();
        }
        return this._alerts;
      }
    
      set factures(value: Array<Facture>) {
        this._Factures = value;
      }

      get fs(): Array<Facture> {
        return this.ligneFactureService.factures;
      }
    
      set fs(value: Array<Facture>) {
        this.ligneFactureService.factures=value;
      }
      private cloneFacture(facture: Facture) {
        const monFacture = new Facture();
        monFacture.client=facture.client;
        monFacture.dateFacturation=facture.dateFacturation;
         monFacture.numeroFacture=facture.numeroFacture;
        return monFacture;
      }
} 