import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeUser } from 'src/app/core/models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {


  private localHostURL="http://localhost:8080/api/TuCine/v1/typeUsers";
  private apiURL="https://backend-tucine-production.up.railway.app/api/TuCine/v1/typeUsers";

  public personsList:TypeUser[]=[];
  constructor(private http: HttpClient) {
    this.getTypeUsers().subscribe((typeUsers) => {
      this.personsList = typeUsers;
    } );
  }
  public getTypeUsers(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.apiURL);
  }

  public getTypeUserById(id:number){
    return this.personsList.find((typeUser)=>typeUser.id==id)?.name;
  }

  public getTypeUsersNamesOfPerson(ids:number[]): String[]{

    let typeUsersNamesOfPerson:String[]=[];

    ids.forEach((id)=>{
      typeUsersNamesOfPerson.push(this.personsList.find((typeUser)=>typeUser.id==id)?.name!.toLocaleLowerCase()!);
    });
    return typeUsersNamesOfPerson;
  }

}




