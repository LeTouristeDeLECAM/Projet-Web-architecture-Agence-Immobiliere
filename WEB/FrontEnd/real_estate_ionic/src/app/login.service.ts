import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// create a class for the ticket
export class Token {
  'token': string;
  'maxAge': number;
}

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  
  baseUrl = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient ) { }


  // Create a fonction to get the ticket list
  // Be careful we should hash the password before sending it to the server
  // An other tricky point is that we should use https instead of http
  // we also should not use a post request but a get request to get the token because all the data are in the url
  public getToken(login_info:any): Observable<any> {
    console.log("Authentification request" );
    return this.http.post<Token> (this.baseUrl + 'login', {params: new HttpParams().set('username', login_info.username ).set('password', login_info.password)});

  }

}
