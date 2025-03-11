import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './app.component';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }

  getShipments() {
    return this.httpClient.get("https://pt.gda.one/api/tests/v1/shipments/share/list");
  }

  signIn(userData: User){
    return this.httpClient.post("https://pt.gda.one/api/tests/v1/login", userData);
  }
}
