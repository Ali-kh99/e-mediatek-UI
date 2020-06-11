import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-afficher-client',
  templateUrl: './afficher-client.component.html',
  styleUrls: ['./afficher-client.component.css']
})
export class AfficherClientComponent implements OnInit {
  clients: any;

  constructor(private http: HttpClient, private clientService: ClientService) { }

  private afficherClient() {
    this.http.get(`http://localhost:8080/e-mediatek/client/`).subscribe(data => {
      this.clients = data;
    }, err => {
      console.log(err);
    });
    // this.clients = this.clientService.findAll();
  }

  ngOnInit() {
    this.afficherClient();
  }


}
