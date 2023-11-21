import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularNowService {

  constructor(private _http: HttpClient) {}

  //localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';
  addPopularEventNow(data: any): Observable<any>{
    return this._http.post(this.prodUrl+'popular-now',data);
  }

  updatePopularEventNow(id: number, data: any): Observable<any>{
    return this._http.put(this.prodUrl+`popular-now/${id}`,data);
  }

  getPopularEventNowList(): Observable<any>{
    return this._http.get(this.prodUrl+'popular-now');
  }

  deletePopularEventNow(id: number): Observable<any>{
    return this._http.delete(this.prodUrl+`popular-now/${id}`)
  }
}
