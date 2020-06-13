import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../model/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private _client:Client;
    private  _clients:Array<Client>;
    constructor(private http: HttpClient) { }

    public save() {
        this.http.post(`http://localhost:8080/e-mediatek/client/`, this.client).subscribe(
            data => {
                console.log(data);
                if (data > 0) {
                  this.clients.push(this.cloneClient(this.client));
                  this.client = null;
                }
              }, eror => {
                console.log('eror');
              });
    }

    public update() {
        this.http.put(`http://localhost:8080/e-mediatek/client/`, this.client).subscribe(err => {
            console.log(err);
        });
    }

    public delete(id: number) {
        this.http.delete(`http://localhost:8080/e-mediatek/client/id/` + id);
    }

    public findAll() {
        this.http.get<Array<Client>>(`http://localhost:8080/e-mediatek/client/`).subscribe( 
            data => {
                this.clients = data;
              },
        );
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

    
      get client(): Client {
        if (this._client == null){
          this._client = new Client();
        }
        return this._client;
      }
    
      set client(value: Client) {
        this._client = value;
      }

      get clients(): Array<Client> {
        if (this._clients == null){
          this._clients = new Array<Client>();
        }
        return this._clients;
      }
    
      set clients(value: Array<Client>) {
        this._clients = value;
      }
      private cloneClient(client: Client) {
        const monClient = new Client();
        monClient.adresse=client.adresse;
        monClient.code=client.code;
        monClient.email=client.email;
        monClient.nom=client.nom;
        monClient.prenom=client.prenom;
        monClient.tel=client.tel;
        return monClient;
      }
    
} 