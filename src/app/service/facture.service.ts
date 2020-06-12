import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class FactureService {
    constructor(private http: HttpClient) { }

    public saveFacture(facture) {
        this.http.post(`http://localhost:8080/e-mediatek/facture/`, facture).subscribe(err => {
            console.log(err);
        });
    }

    public delete(id: number) {
        this.http.delete(`http://localhost:8080/e-mediatek/facture/id/` + id);
    }

    public findAll() {
        this.http.get(`http://localhost:8080/e-mediatek/facture/`).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
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
} 