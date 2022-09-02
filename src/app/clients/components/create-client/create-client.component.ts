import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, MaritalStatus, Municipality } from '@models';
import { ClientService } from '@services';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  departments: Department[] = [];
  municipalities: Municipality[] = [];
  maritalStatus: MaritalStatus[] = [];

  formClient: FormGroup = this.fb.group({
    dpi: ['', Validators.required],
    name: ['', Validators.required],
    birthday: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    department: ['', Validators.required],
    municipality: ['', Validators.required],
  });

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder
  ) { }

  createClient(): void {
    this.clientService.create(this.formClient.value)
      .subscribe({
        next: (resp) => console.log(resp),
        error: (err) => console.log(err)
      });
  }

  ngOnInit(): void {

    this.clientService.getDeparments()
      .subscribe({
        next: (resp) => this.departments = resp
      });

    this.clientService.getMunicipalities()
      .subscribe({
        next: (resp) => this.municipalities = resp
      });

    this.clientService.getMaritalStatus()
      .subscribe({
        next: (resp) => this.maritalStatus = resp
      });
  }

}
