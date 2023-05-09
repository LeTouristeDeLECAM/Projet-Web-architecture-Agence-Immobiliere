import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
  public editAppartement(appartement: any, appart_Id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    console.log("token : ", headers.get('Authorization'));
    console.log("  token 2 ", localStorage.getItem('token'));

    const params= new HttpParams().set('title', appartement.title ).set('description', appartement.description).set('price', appartement.price).set('surface', appartement.surface).set('nbRooms', appartement.nbRooms).set('address', appartement.address).set('appart_Id', appart_Id)
    
    // console.log("params : ",params);
    // console.log("headers : ",headers);
    return this.http.put<Appartement>(this.baseUrl + 'appartement/' + appart_Id,{ params: params,headers: headers});
  }

  // add appartement without token
  public addAppartement(appartement: Appartement): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })

    console.log("flag 1")
    let params= new HttpParams().set('title', appartement.title ).set('description', appartement.description).set('price', appartement.price.toString()).set('surface', appartement.surface.toString()).set('nbRooms', appartement.nbRooms.toString()).set('address', appartement.address)
    console.log("flag 2")
    console.log("params : ",params);
    return this.http.post<Appartement>(this.baseUrl + 'appartement', appartement, {params: params, headers: headers}); 
  }

  // delete appartement token needed 
  public deleteAppartement(appartement: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    console.log("token : ", headers.get('Authorization'));
    console.log("  token 2 ", localStorage.getItem('token'));
    
    return this.http.delete<Appartement>(this.baseUrl + 'appartement/' + appartement, {headers: headers});
  }

}
