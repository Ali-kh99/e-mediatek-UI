import { Facture } from './facture';

export class Client {
    public id:number;
    public code: string;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public tel: number;
    public email: string;
    public factures :Array<Facture>;
    constructor() {}

}
