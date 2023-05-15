import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __param } from 'tslib';


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
  public addRenter(renter: any, appart_id: number ): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.post<Renter>(this.baseUrl + 'appartement/' + appart_id+'/renter', {renter,appart_id},
     {headers: headers , params: new HttpParams().set('appart_Id', appart_id).set('firstName', renter.firstName ).set('lastName', renter.lastName).set('email', renter.email)}); 
  }

  // fonction to delete a renter
  public deleteRenter(appart_Id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.delete<Renter>(this.baseUrl + 'appartement/' + appart_Id+'/renter', {headers: headers});
  }

  // fonction to update a renter
  public editRenter(renter: any, appart_Id: number, renter_Id?: number ): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })

    let params =  new HttpParams().set('firstName', renter.firstName ).set('lastName', renter.lastName).set('email', renter.email);
    console.log("params : ",params);
    return this.http.put<Renter>(this.baseUrl + 'appartement/' + appart_Id+"/renter", renter,{headers: headers ,params: params} );
    //return this.http.put<Appartement>(this.baseUrl + 'appartement/'+appart_Id , appartement,{ params: params,headers: headers}); 
  }



}
