import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerProfileService {

  constructor(private _http: HttpClient) {}

  localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';

  addOwner(data: any): Observable<any>{
    return this._http.post(this.prodUrl+'owners',data);
  }

/*  updateOwner(id: number, data: any): Observable<any>{
    return this._http.put(this.prodUrl+`owners`,data);
  }*/

  getOwnerList(): Observable<any>{
    return this._http.get(this.prodUrl+'owners');
  }
}
