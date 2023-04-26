import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


// Create a class for the renter
export class Renter {
  'renter_Id': number;
  'firstName': string;
  'lastName': string;
  'email': string;
  'appart_Id': number;
}


@Injectable({
  providedIn: 'root'
})
export class RenterManagementService {

  baseUrl = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient ) { }

  // fonction to get renter for an appart
  public getRenterList(appart_Id: number): Observable<any> {
    console.log(this.baseUrl + 'appartement/' + appart_Id+'/renter');
    return this.http.get<Renter[]>(this.baseUrl + 'appartement/' + appart_Id+'/renter');
  }

  // fonction add a renter to an appart
  public addRenter(renter: Renter): Observable<any> {
    return this.http.post<Renter>(this.baseUrl + 'appartement/' + renter.appart_Id+'/renter', renter,
     {params: new HttpParams().set('firstName', renter.firstName ).set('lastName', renter.lastName).set('email', renter.email).set('appart_Id', renter.appart_Id)}); 
  }

  // fonction to delete a renter
  public deleteRenter(renter_Id: number): Observable<any> {
    return this.http.delete<Renter>(this.baseUrl + 'renter/' + renter_Id);
  }

  // fonction to update a renter
  public updateRenter(renter: Renter): Observable<any> {
    return this.http.put<Renter>(this.baseUrl + 'renter/' + renter.renter_Id, renter,
     {params: new HttpParams().set('firstName', renter.firstName ).set('lastName', renter.lastName).set('email', renter.email).set('appart_Id', renter.appart_Id)}); 
  }



}
