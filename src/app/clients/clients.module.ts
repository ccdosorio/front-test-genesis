import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CoreModule } from 'core/core.module';
import { ClientsRouting } from './clients.routing';
import { CardClientComponent } from './components/card-client/card-client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

@NgModule({
  declarations: [
    MainComponent,
    ListClientsComponent,
    CardClientComponent,
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ClientsRouting
  ]
})
export class ClientsModule { }
