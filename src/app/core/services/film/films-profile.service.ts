import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/films',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films/${id}
    return this._http.put(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}`,data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/films');
  }

  getMoviebyId(id: number): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films/${id}
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films/${id}
    return this._http.delete(`http://localhost:3000/Film/${id}`)
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{

    http://localhost:8080/api/TuCine/v1/films/${id}/showtimes
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}/showtimes`);
  }

  getBusinessById(id: number): Observable<any> {

    //http://localhost:8080/api/TuCine/v1/businesses/${id}
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {

    //http://localhost:8080/api/TuCine/v1/businessTypes/${id}
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes/${id}`);
  }

  getBusiness(): Observable<any[]>{

    //http://localhost:8080/api/TuCine/v1/businesses
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses');
  }

  getBusinessType(): Observable<any[]>{

    //http://localhost:8080/api/TuCine/v1/businessTypes
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes');
  }

  getShowtimebyId(id: number): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/showtimes/${id}
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/showtimes/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/films/${id}/actors
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}/actors`);
  }

  getActorList(): Observable<any[]>{

    //http://localhost:8080/api/TuCine/v1/actors
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/actors');
  }

  getCineclubById(id: number): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/businesses/${id}
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses/${id}`);
  }

}
