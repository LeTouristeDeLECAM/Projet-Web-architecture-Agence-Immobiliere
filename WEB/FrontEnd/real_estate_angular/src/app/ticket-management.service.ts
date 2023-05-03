import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  appart_Id : Number = 2;

  public getTicketList(id:number): Observable<any> {
    console.log(this.baseUrl +'appartement/'+id+'/ticket');
    return this.http.get<Ticket[]>(this.baseUrl +'appartement/'+2+'/ticket');
  
  }


  //Get a ticket by id
  public getTicketById(ticket_Id: number): Observable<any> {
    return this.http.get<Ticket>(this.baseUrl + 'ticket/' + ticket_Id);
  }


  // Create a fonction to edit a ticket
  public editTicket(ticket: Ticket): Observable<any> {
    return this.http.put<Ticket>(this.baseUrl + 'ticket/' + ticket.ticket_Id, ticket);
  }

  // Create a fonction to add a ticket
  // !!!!!!!! change the routes 
  public addTicket(ticket: Ticket): Observable<any> {
    return this.http.post<Ticket>(this.baseUrl + 'ticket', ticket, {params: new HttpParams().set('title', ticket.title ).set('description', ticket.description).set('status', ticket.status).set('appart_Id', ticket.appart_Id)});
  }

  // Create a fonction to update a ticket
  public updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put<Ticket>(this.baseUrl + 'ticket/' + ticket.ticket_Id, ticket, {params: new HttpParams().set('title', ticket.title ).set('description', ticket.description).set('status', ticket.status).set('appart_Id', ticket.appart_Id)});
  }


  // // Create a fonction to update the status of a ticket
  // public updateTicketStatus(ticket: Ticket): Observable<any> {
  //   return this.http.put<Ticket>(this.baseUrl + 'ticket/' + ticket.ticket_Id, ticket, {params: new HttpParams().set('status', ticket.status)});
  // }

}
