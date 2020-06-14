import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { ServiceSav } from 'src/app/model/serviceSav';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  showForm=false;
  cEdit =new Client();
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.findAll();
  }
    
  public edit(client:Client){
    this.cEdit=client;
    this.showForm=true;
  }
  public upDate(client:Client){
    this.clientService.update(client);
    this.showForm=false;
  }
  public save(){
    this.clientService.save();
  }
  public delete(id){
    this.clientService.delete(id);
  }
  get client(): Client {
    return  this.clientService.client;
  }
  get clients(): Array<Client> {

    return this.clientService.clients;
  }
  get servicesav(): Array<ServiceSav> {
    return this.clientService.servicesav;
  }
}
