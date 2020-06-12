import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProduitService {
    constructor(private http: HttpClient) { }

    public save(produit) {
        console.log(produit);
        this.http.post(`http://localhost:8080/e-mediatek/produit/`, produit).subscribe(err => {
            
            console.log(err);
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
        this.http.get(`http://localhost:8080/e-mediatek/produit/`).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
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
} 