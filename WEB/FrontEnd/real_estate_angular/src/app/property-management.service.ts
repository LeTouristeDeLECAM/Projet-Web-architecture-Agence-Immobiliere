import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Appartement {
  'appart_Id': number;
  'title': string;
  'description': string;
  'price': number;
  'surface': number;
  'nbRooms': number;
  'address': string;}



@Injectable({
  providedIn: 'root'
})

export class PropertyManagementService {
  
  baseUrl = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient ) { }

  // without token 
  public getAppartementList(): Observable<any> {
    return this.http.get<Appartement[]>(this.baseUrl + 'appartement');
  }

  // edit appartement without token
  public editAppartement(appartement: Appartement): Observable<any> {
    return this.http.put<Appartement>(this.baseUrl + 'appartement' + appartement.appart_Id, appartement);
  }

  // add appartement without token
  public addAppartement(appartement: Appartement): Observable<any> {
    return this.http.post<Appartement>(this.baseUrl + 'appartement', appartement, {params: new HttpParams().set('title', appartement.title ).set('description', appartement.description).set('price', appartement.price.toString()).set('surface', appartement.surface.toString()).set('nbRooms', appartement.nbRooms.toString()).set('address', appartement.address)}); 
  }

  // delete appartement token needed
  public deleteAppartement(appartement: number): Observable<any> {
    return this.http.delete<Appartement>(this.baseUrl + 'appartement/' + appartement);
  }

}
