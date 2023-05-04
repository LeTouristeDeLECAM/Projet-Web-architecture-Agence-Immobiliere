import { Component } from '@angular/core';
import { Ticket, TicketManagementService } from '../ticket-management.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    title: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required ),
    status: new FormControl('',Validators.required),

  });


  constructor(private ticketManagementService: TicketManagementService, private router: ActivatedRoute, private route: Router ) { }

  id= this.router.snapshot.params['id'];

  // Get the ticket list of an apartment
  ngOnInit(){
    console.log("flag 0", this.id);
    this.ticketManagementService.getTicketList(this.id).subscribe(
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

  // Redirect to estimate 
  goToEstimate(ticket_Id: number){
    console.log("ticket_Id", ticket_Id);
    this.route.navigate(['estimate', ticket_Id]);
  }

  //  fonction to edit a ticket of the list
  editTicket(ticket: Ticket){
    this.ticketManagementService.editTicket( ticket).subscribe( )
  }

  // Create a ticket for an apartment
  addTicket(){

    console.log("FormGroup", this.postForm.value)

    this.ticketManagementService.addTicket(this.postForm.value, this.id).subscribe(res => {
      console.log(res);
      window.location.reload();
    }
    );
  }






}
