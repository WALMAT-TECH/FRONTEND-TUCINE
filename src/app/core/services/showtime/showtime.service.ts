import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  constructor(private _http: HttpClient) { }

  //localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';

  getAllShowtimesByBusinessId(id: number): Observable<any>{

    return this._http.get(this.prodUrl+`businesses/${id}/showtimes`);
  }

}
