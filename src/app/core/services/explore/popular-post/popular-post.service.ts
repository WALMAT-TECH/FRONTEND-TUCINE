import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularPostService {

  constructor(private _http: HttpClient) {}

  //localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';
  addPopularPost(data: any): Observable<any>{
    return this._http.post(this.prodUrl+'popular-post',data);
  }

  updatePopularPost(id: number, data: any): Observable<any>{
    return this._http.put(this.prodUrl+`popular-post/${id}`,data);
  }

  getPopularPostList(): Observable<any>{
    return this._http.get(this.prodUrl+'popular-post');
  }

  deletePopularPost(id: number): Observable<any>{
    return this._http.delete(this.prodUrl+`popular-post/${id}`)
  }
}
