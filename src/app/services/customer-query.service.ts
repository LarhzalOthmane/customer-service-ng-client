import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerQueryService {
  url = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  public getAllCustomers() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url + '/query/customers/', {
      headers: headers,
    });
  }

  public getCustomer(id: any) {
    return this.http.get(this.url + `/query/customers/${id}`);
  }
}
