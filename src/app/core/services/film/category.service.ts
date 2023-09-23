import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //http://localhost:8080/api/TuCine/v1/categories
  private apiBackend="https://backend-tucine-production.up.railway.app/api/TuCine/v1/categories";

  public categoriesList:Category[]=[];

  constructor(private http: HttpClient) {
    this.getCategories().subscribe((categories) => {
      this.categoriesList = categories;
    } );
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiBackend);
  }

  public getCategorieById(id:number){
    return this.categoriesList.find((category)=>category.id==id)?.name;
  }

  public getCategoriesNamesOfFilm(ids:number[]): String[]{

    let categoriesNamesOfFilm:String[]=[];

    ids.forEach((id)=>{
      categoriesNamesOfFilm.push(this.categoriesList.find((category)=>category.id==id)?.name!.toLocaleLowerCase()!);
    });
    return categoriesNamesOfFilm;
  }

}
