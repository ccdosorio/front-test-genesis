import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@models';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit {

  @Input() client: Client | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
