import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  constructor(private _http: HttpClient) { }

  getAllShowtimesByBusinessId(id: number): Observable<any>{

    return this._http.get(`http://localhost:8080/api/TuCine/v1/businesses/${id}/showtimes`);
  }

}
