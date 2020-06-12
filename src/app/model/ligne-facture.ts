import { Facture } from './facture';
import { Produit } from './produit';

export class LigneFacture {
    public facture: Facture;
    public produit: Produit;
    public qteAchetee: number;
    constructor() { }
    
}
