import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { MainComponent } from './components/main/main.component';

const rutas: Routes = [ 
  { 
    path: '', 
    component: MainComponent, 
    children: [ 
      { path: 'list', component: ListClientsComponent }, 
      { path: 'create', component: CreateClientComponent }, 
      { path: '**', redirectTo: 'list' } 
    ] 
  } 
]; 
 
 
 
@NgModule({ 
  imports: [ 
    RouterModule.forChild( rutas ) 
  ], 
  exports: [ 
    RouterModule 
  ] 
}) 
export class ClientsRouting { }