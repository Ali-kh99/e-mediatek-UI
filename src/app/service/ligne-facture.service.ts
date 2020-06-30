import { Injectable } from "@angular/core";
import { Facture } from "../model/facture";
import { HttpClient } from "@angular/common/http";
import { FactureService } from "./facture.service";
import { LigneFacture } from "../model/ligne-facture";

@Injectable({
  providedIn: "root",
})
export class LigneFactureService {
  private _factures: Array<Facture>;
  constructor(private http: HttpClient) {}

  public findProduitsByFacture(facture: Facture) {
    this.http
      .post<Array<LigneFacture>>(
        `http://localhost:5050/e-mediatek/ligne-facture/facture`,
        facture
      )
      .subscribe((data) => {
        facture.ligneFactures = data;
        this.factures.push(facture);
      });
  }
  public FacturesWithfindProduits(factures: Array<Facture>) {
      this.factures.length=0;
    for (let i = 0; i < factures.length; i++) {
      this.findProduitsByFacture(factures[i]);
    }
  }

  get factures(): Array<Facture> {
    if (this._factures == null) {
      this._factures = new Array<Facture>();
    }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }
}
