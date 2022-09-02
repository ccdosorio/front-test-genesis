import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, Department, MaritalStatus, Municipality } from '@models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.endpoint + 'client');
  }

  getClientById(id: number):Observable<Client> {
    return this.http.get<Client>(environment.endpoint + 'client/' + id);
  }

  create(client: Client) {
    return this.http.post(environment.endpoint + 'client', client, {});
  }

  // catalogs

  getDeparments():Observable<Department[]> {
    return this.http.get<Department[]> (environment.endpoint + 'client/department')
  }

  getMunicipalities(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(environment.endpoint + 'client/municipality')
  }

  getMaritalStatus(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>(environment.endpoint + 'client/marital')
  }
}
