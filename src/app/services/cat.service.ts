import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreedModel } from '../models/breed.model';
import { ImageModel } from '../models/image.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CatService {

  constructor(private httpClient: HttpClient) { }

  public getAllBreedsList(limit: number): Observable<BreedModel[]> {

    let params: HttpParams = new HttpParams();
    params = params.set('limit', limit.toString());

    return this.httpClient.get<BreedModel[]>(`${environment.apiUrl}/breeds`,{ params: params });
  }

  public getAllCatsImages(limit: number, breed?: string): Observable<ImageModel[]> {
    let params: HttpParams = new HttpParams();
    params = params.set('limit', limit.toString());
    if (breed) {
      params = params.set('breed_ids', breed);
    }
    return this.httpClient.get<ImageModel[]>(`${environment.apiUrl}/images/search`,{ params: params });
  }

}
