import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerCommandsService } from './services/customer-commands.service';
import { CustomerQueryService } from './services/customer-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Customers';
  public customers: any;
  constructor(
    public queryService: CustomerQueryService,
    public commandsService: CustomerCommandsService
  ) {
    this.queryService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onSubmit(form: any) {
    console.log(form);

    this.commandsService.createCustomer(form).subscribe(
      (data: any) => {
        alert('Customer created!');
        this.ngOnInit();
      },
      (error: any) => {
        console.log(error);
        this.ngOnInit();
      },
      () => {
        this.ngOnInit();
      }
    );
  }

  ngOnInit(): void {
    this.queryService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
