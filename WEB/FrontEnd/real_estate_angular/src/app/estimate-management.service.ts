import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Create a class for the repair estimate
export class Estimate {
  'estimate_Id': number;
  'title': string;
  'description': string;
  'price': number;
  'ticket_Id': number;
}




@Injectable({
  providedIn: 'root'
})
export class EstimateManagementService {

  baseUrl = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient ) { }

  // fonction to get the list of estimate for a ticket
  public getEstimateList(ticket_Id: number): Observable<any> {
    return this.http.get<Estimate[]>(this.baseUrl + 'ticket/' + ticket_Id+'/repair_estimate');
  }

  // fonction add an estimate to a ticket
  public addEstimate(estimate: any, ticket_Id: number): Observable<any> {
    return this.http.post<Estimate>(this.baseUrl + 'ticket/' + ticket_Id+'/repair_estimate', estimate,
     {params: new HttpParams().set('title', estimate.title ).set('description', estimate.description).set('price', estimate.price).set('ticket_Id', ticket_Id)}); 
  }

  // fonction to delete an estimate
  public deleteEstimate(estimate_Id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.delete<Estimate>(this.baseUrl + 'repair_estimate/' + estimate_Id, {headers: headers});
  }
  
}


