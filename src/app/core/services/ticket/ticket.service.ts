import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  //localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';

  addTicket(data: any): Observable<any>{
    //http://localhost:8080/api/TuCine/v1/tickets
    return this._http.post(this.prodUrl+'tickets',data);
  }


}
