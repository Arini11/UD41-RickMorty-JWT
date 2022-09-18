import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_URL='https://jmm-spring-api-h2-angular.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(AUTH_URL + 'login', data, httpOptions);
  }

  getUser(username:string): Observable<any> {
    return this.http.get(AUTH_URL + "users/" + username, httpOptions);
  }


}
