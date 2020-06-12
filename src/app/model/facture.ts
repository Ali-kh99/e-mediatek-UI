import { Client } from './client';
import { LigneFacture } from './ligne-facture';

export class Facture {
    public numFacture: string;
    public client: Client;
    public dateFacturation: Date;
    public ligneFacture = new Array<LigneFacture>();
   
    constructor(){}
}
