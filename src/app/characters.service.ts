import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }

}
