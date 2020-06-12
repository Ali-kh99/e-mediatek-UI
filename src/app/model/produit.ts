import { LigneFacture } from './ligne-facture';

export class Produit {
    public ligneFacture = new Array<LigneFacture>();
    public codeBarre: string;
    public prix: string;
    public designation: string;
    public qteStock: string;
    constructor() { }
}
