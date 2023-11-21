import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  constructor(private _http: HttpClient) {}

  localUrl = 'http://localhost:8080/api/TuCine/v1/';
  prodUrl= 'https://backend-tucine-production.up.railway.app/api/TuCine/v1/';
  addMovieProfile(data: any): Observable<any>{
    return this._http.post(this.prodUrl+'films',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(this.prodUrl+`films/${id}`,data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get(this.prodUrl+'films');
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(this.prodUrl+`films/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(this.prodUrl+`Film/${id}`)
  }
  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(this.prodUrl+`films/${id}/showtimes`);
  }

  getBusinessById(id: number): Observable<any> {
    return this._http.get(this.prodUrl+`businesses/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {
    return this._http.get(this.prodUrl+`businessTypes/${id}`);
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>(this.prodUrl+'businesses');
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>(this.prodUrl+'businessTypes');
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(this.prodUrl+`showtimes/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(this.prodUrl+`films/${id}/actors`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>(this.prodUrl+'actors');
  }

  getCineclubById(id: number): Observable<any>{
    return this._http.get(this.prodUrl+`businesses/${id}`);
  }

}
