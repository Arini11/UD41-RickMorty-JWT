import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Character } from './model/character.model';

const BASE = 'http://localhost:3000/characters'

@Injectable({providedIn: 'root'})
export class CharactersService {

    constructor(private http : HttpClient) {}

    getAll(): Observable<Character[]> {
        return this.http.get<Character[]>(BASE);
    }

    get(id : any): Observable<Character> {
        return this.http.get<Character>(`${BASE}/${id}`);
    }

    create(data : any): Observable<any> {
        return this.http.post(BASE, data);
    }

    update(id : any, data : any): Observable<any> {
        return this.http.put(`${BASE}/${id}`, data);
    }

    delete(id : any): Observable<any> {
        return this.http.delete(`${BASE}/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(BASE);
    }

    findByName(name : any): Observable<Character[]> {
        return this.http.get<Character[]>(`${BASE}?name=${name}`);
    }
}
