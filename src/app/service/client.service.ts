import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    constructor(private http: HttpClient) { }

    public saveClient(client) {
        this.http.post(`http://localhost:8080/e-mediatek/client/`, client).subscribe(err => {
            console.log(err);
        });
    }

    public update(client) {
        this.http.put(`http://localhost:8080/e-mediatek/client/`, client).subscribe(err => {
            console.log(err);
        });
    }

    public delete(id: number) {
        this.http.delete(`http://localhost:8080/e-mediatek/client/id/` + id);
    }

    public findAll() {
        this.http.get(`http://localhost:8080/e-mediatek/client/`).subscribe(data => {
            return data;
            console.log(data);
        }, err => {
            console.log(err);
        });
    }

    public findByCode(code: string) {
        this.http.get(`http://localhost:8080/e-mediatek/client/code/` + code).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    public findByNom(nom: string) {
        this.http.get(`http://localhost:8080/e-mediatek/client/nom/` + nom).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    public findByPrenom(prenom: string) {
        this.http.get(`http://localhost:8080/e-mediatek/client/prenom/` + prenom).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }

    public findByEmail(email: string) {
        this.http.get(`http://localhost:8080/e-mediatek/client/email/` + email).subscribe(data => {
            return data;
        }, err => {
            console.log(err);
            return err;
        });
    }
} 