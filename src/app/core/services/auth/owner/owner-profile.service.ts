import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerProfileService {

  constructor(private _http: HttpClient) {}

  //http://localhost:8080/api/TuCine/v1/owners
  addOwner(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/owner',data);
  }

  //http://localhost:8080/api/TuCine/v1/owners
/*  updateOwner(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/owner${id}`,data);
  }*/

  //http://localhost:8080/api/TuCine/v1/owners
  getOwnerList(): Observable<any>{
    return this._http.get('http://localhost:3000/owner');
  }
}
