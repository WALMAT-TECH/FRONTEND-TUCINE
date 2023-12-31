import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessType } from '../../models/cineclub.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypesService {

  //Localhost Url= http://localhost:8080/api/TuCine/v1/businessTypes
  private apiURL="https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes";

  public businessTypesList:BusinessType[]=[];

  constructor(private http: HttpClient) {
    this.getBusinessTypes().subscribe((businessTypes) => {
      this.businessTypesList = businessTypes;
    } );
  }
  public getBusinessTypes(): Observable<BusinessType[]> {
    return this.http.get<BusinessType[]>(this.apiURL);
  }

  public getBusinessTypeById(id:number){
    //return this.businessTypesList.find((businessType)=>businessType.id==id)?.name;
    return this.http.get<BusinessType>(`${this.apiURL}/${id}`);
  }

  public getBusinessTypesNamesOfCineclubs(ids:number[]): String[]{

    let businessTypesNamesOfCineclubs:String[]=[];

    ids.forEach((id)=>{
      businessTypesNamesOfCineclubs.push(this.businessTypesList.find((businessType)=>businessType.id==id)?.name!.toLocaleLowerCase()!);
    });
    return businessTypesNamesOfCineclubs;
  }

}
