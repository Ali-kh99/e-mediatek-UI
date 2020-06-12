import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  public save() {
    this.clientService.saveClient(this.client);
  }

}
