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
  searchC ='';
  cEdit =new Client();
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.findAll();
  }
  
  public searchClient(){
     this.resultServicesav = this.servicesav
     .filter((servicesav)=>servicesav.client.code.toLowerCase().includes(this.searchC.toLowerCase()));
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
  get resultServicesav():Array<ServiceSav> {
    return this.clientService.copierServicesav;
  }
  set resultServicesav(val:Array<ServiceSav>){
       this.clientService.copierServicesav=val;
  }
}
