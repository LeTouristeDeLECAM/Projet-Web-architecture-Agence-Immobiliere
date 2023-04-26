import { Component } from '@angular/core';
import { Ticket, TicketManagementService } from '../ticket-management.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  // create a variable to store the ticket list
  ticketList: Ticket[] = [];

  // create a variable to store a ticket
  ticket = new Ticket();

  // Create a variable to store the form
  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    appartement: new FormControl(''),

  });


  constructor(private ticketManagementService: TicketManagementService) { }
  // Get the ticket list of an apartment
  ngOnInit(){
    console.log("flag 0");
    this.ticketManagementService.getTicketList().subscribe(
      data => {
        console.log("flag 2", data);
        this.ticketList = data;
        console.log("flag 3",this.ticketList);
      }
    )
  }

  
  // Get a ticket by id
  getTicketById(ticket_Id: number){
    this.ticketManagementService.getTicketById(ticket_Id).subscribe(
      data => {
        this.ticket = data;
        console.log(this.ticket);
      }
    )
  }


 

  //  fonction to edit a ticket of the list
  editTicket(ticket: Ticket){
    this.ticketManagementService.editTicket( ticket).subscribe( )
  }

  // Create a ticket for an apartment
  addTicket(ticket: Ticket){
    this.ticketManagementService.addTicket(ticket).subscribe()
  }






}
