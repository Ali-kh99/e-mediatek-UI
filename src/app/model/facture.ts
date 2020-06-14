import { Client } from './client';
import { LigneFacture } from './ligne-facture';

export class Facture {
    public id:number;
    public numeroFacture: string;
    public client: Client;
    public dateFacturation: Date;
    public ligneFactures = new Array<LigneFacture>();
   
    constructor(){}
}
