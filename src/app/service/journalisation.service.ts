import { Injectable } from '@angular/core';
import { Journalisation } from '../model/journalisation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalisationService {
    private _journalisation:Journalisation;
    private _journalisations:Array<Journalisation>;
  constructor(private http:HttpClient) { }



  public findAll() {
    this.http.get<Array<Journalisation>>(`http://localhost:5050/e-mediatek/journalisation/`).subscribe(
        data => {
            this.journalisations = data;
          
          }
    );
}

   get journalisations(): Array<Journalisation> {
    if (this._journalisations == null) {
      this._journalisations = new Array<Journalisation>();
    }
    return this._journalisations;
  }

  set journalisations(value: Array<Journalisation>) {
    this._journalisations = value;
  }
  


}
