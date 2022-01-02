import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerCommandsService {

  url = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  public createCustomer(form: any){
    return this.http.post(this.url + "/commands/customers/create", form);
  }
}
