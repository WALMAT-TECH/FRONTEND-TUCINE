import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Person } from 'src/app/core/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: Person): Observable<any>{

    //http://localhost:8080/api/TuCine/v1/persons
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/persons',data);
  }

  //http://localhost:8080/api/TuCine/v1/persons
  getPersonList(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/persons');
  }

  //http://localhost:8080/api/TuCine/v1/genders
  getUserGender(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/genders');
  }

  //Customer
  //http://localhost:8080/api/TuCine/v1/customers
  addCustomer(data: any): Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/customers',data);
  }


  //http://localhost:8080/api/TuCine/v1/customers
  getCustomerList(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/customers');
  }

  //http://localhost:8080/api/TuCine/v1/businessTypes
  getBusinessTypeList(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes');
  }


  //http://localhost:8080/api/TuCine/v1/owners
  addOwner(data: any): Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/owners',data);
  }

  //http://localhost:8080/api/TuCine/v1/businesses
  addBusiness(data: any):Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses',data);
  }

  validateCredentials(email: string, password: string): Observable<any>{
    return this.getPersonList().pipe(
      switchMap((userList: any[]) => {
        const user = userList.find(user => user.email === email);

        if (user && user.password === password) {
          // Las credenciales coinciden
          return of({ valid: true, user: user });
        } else {
          // Las credenciales no coinciden
          return of({ valid: false, user: null });
        }
      })
    );
  }

}
