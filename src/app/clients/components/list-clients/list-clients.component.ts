import { Component, OnInit } from '@angular/core';
import { Client } from '@models';
import { ClientService } from '@services';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe({
        next: (resp) => this.clients = resp,
        error: (err) => console.log(err)
      })
  }

}
