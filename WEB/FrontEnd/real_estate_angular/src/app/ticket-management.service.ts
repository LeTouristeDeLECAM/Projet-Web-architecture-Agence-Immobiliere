import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

// create a class for the ticket
export class Ticket {
  'ticket_Id': number;
  'title': string;
  'description': string;
  'status': string;
  'appart_Id': number;
}
  


@Injectable({
  providedIn: 'root'
})
export class TicketManagementService {

  baseUrl = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient ) { }

  // Create a fonction to get the ticket list
  // Change the routes

  // temporary
  

  public getTicketList(appart_Id:number): Observable<any> {
    console.log(this.baseUrl +'appartement/'+appart_Id+'/ticket');
    return this.http.get<Ticket[]>(this.baseUrl +'appartement/'+appart_Id+'/ticket');
  
  }


  //Get a ticket by id
  public getTicketById(ticket_Id: number): Observable<any> {
    return this.http.get<Ticket>(this.baseUrl + 'ticket/' + ticket_Id);
  }


  // Create a fonction to edit a ticket
  public editTicket(ticket: Ticket): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.put<Ticket>(this.baseUrl + 'ticket/' + ticket.ticket_Id, ticket, {headers: headers });
  }

  // Create a fonction to add a ticket
  // /appartement/{appart_Id}/ticket
  public addTicket(ticket: any, appart_Id: number): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    
    return this.http.post<Ticket>(this.baseUrl + 'appartement/'+appart_Id+"/ticket", ticket, {headers: headers , params: new HttpParams().set('title', ticket.title ).set('description', ticket.description).set('status', ticket.status).set('appart_Id', appart_Id)});
  }

  // Create a fonction to update a ticket
  public updateTicket(ticket: Ticket): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put<Ticket>(this.baseUrl + 'ticket/' + ticket.ticket_Id, ticket, {headers: headers , params: new HttpParams().set('title', ticket.title ).set('description', ticket.description).set('status', ticket.status).set('appart_Id', ticket.appart_Id)});
  }

}
