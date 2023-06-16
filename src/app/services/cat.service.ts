import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/categories.model';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) { }

  public getAllBreedsList():Observable<any> {
    return this.httpClient.get(``)
  }

  public getCatsByBreed():Observable<any> {
    return this.httpClient.get(``);
  }

  public getAllBreedsCategories():Observable<CategoriesModel[]> {
    return this.httpClient.get<CategoriesModel[]>(`${environment.apiUrl}/categories`);
  }

}
