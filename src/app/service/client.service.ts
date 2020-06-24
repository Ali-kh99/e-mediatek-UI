import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../model/client";
import { ServiceSav } from '../model/serviceSav';
import { StringResponse } from '../model/StringResponse';

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private _client: Client;
  private _clients: Array<Client>;
  private _copierClients: Array<Client>;
  private _serviceSav:Array<ServiceSav>;
  private _copierServiceSav:Array<ServiceSav>;
  constructor(private http: HttpClient) {}

  public save() {
    this.http
      .post<Client>(`http://localhost:5050/e-mediatek/client/`, this.client)
      .subscribe(
        (data) => {
          if (data != null) {
            this.client=this.cloneClient(this.client);
            this.clients.push(this.client);
            this.sav(this.client.code,this.client);
            this.client = null;
          }
        },
        (eror) => {
          console.log("eror");
        }
      );
  }

  public update(client) {
    this.http
      .post(`http://localhost:5050/e-mediatek/client/update`, client)
      .subscribe((eror) => {
        console.log(eror);
      });
  }

  public delete(id: number) {
    this.http.delete(`http://localhost:5050/e-mediatek/client/id/` + id).subscribe(()=>{
      this.clients = this.clients.filter((client) => client.id != id);
    }
    );
  }

  public findAll() {
    this.http
      .get<Array<Client>>(`http://localhost:5050/e-mediatek/client/`)
      .subscribe((data) => {
        this.clients = data;
       this.copierClients=data;
        this.serviceSav();
      });
  }
  public sav(code:String,client:Client){
    this.http.get<StringResponse>(`http://localhost:5050/e-mediatek/client/sav/` + code)
    .subscribe(
      (data) => {
        const sav = new ServiceSav();
        sav.client = client;
        sav.categorie = data;
        this.servicesav.push(sav);
        this.copierServicesav.push(sav);
      });
  }

  public serviceSav(){
    this.servicesav.length=0;
    this.copierServicesav.length=0;
    for(let i=0;i<this.clients.length;i++){
      this.sav(this.clients[i].code,this.clients[i]);
    }
  }
  public findByCode(code: string) {
    this.http
      .get(`http://localhost:8080/e-mediatek/client/code/` + code)
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

  public findByNom(nom: string) {
    this.http
      .get(`http://localhost:8080/e-mediatek/client/nom/` + nom)
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

  public findByPrenom(prenom: string) {
    this.http
      .get(`http://localhost:8080/e-mediatek/client/prenom/` + prenom)
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

  public findByEmail(email: string) {
    this.http
      .get(`http://localhost:8080/e-mediatek/client/email/` + email)
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
   
  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if (this._clients == null) {
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
  

  get copierClients(): Array<Client> {
    if (this._copierClients == null) {
      this._copierClients = new Array<Client>();
    }
    return this._copierClients;
  }

  set copierClients(value: Array<Client>) {
    this._copierClients = value;
  }
  private cloneClient(client: Client) {
    const monClient = new Client();
    monClient.adresse = client.adresse;
    monClient.code = client.code;
    monClient.email = client.email;
    monClient.nom = client.nom;
    monClient.prenom = client.prenom;
    monClient.tel = client.tel;
    return monClient;
  }
  get servicesav(): Array<ServiceSav> {
    if (this._serviceSav == null) {
      this._serviceSav = new Array<ServiceSav>();
    }
    return this._serviceSav;
  }

  set servicesav(value: Array<ServiceSav>) {
    this._serviceSav = value;
  }
  get copierServicesav(): Array<ServiceSav> {
    if (this._copierServiceSav == null) {
      this._copierServiceSav = new Array<ServiceSav>();
    }
    return this._copierServiceSav;
  }

  set copierServicesav(value: Array<ServiceSav>) {
    this._copierServiceSav = value;
  }
}
