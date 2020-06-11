import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client("", "", "", "", 0, "");

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  public save() {
    this.clientService.saveClient(this.client);
  }

}
