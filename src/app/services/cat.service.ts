import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreedModel } from '../models/breed.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) { }

  public getAllBreedsList():Observable<BreedModel[]> {
    return this.httpClient.get<BreedModel[]>(`${environment.apiUrl}/breeds`, {
      headers: new HttpHeaders({

      })
    })
  }

  public getAllCatsImages():Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/images/search`, {
      headers: new HttpHeaders({

      })
    });
  }

}
