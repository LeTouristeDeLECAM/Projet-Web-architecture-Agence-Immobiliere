import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketManagementService } from '../ticket-management.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent {

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required ),
    status: new FormControl('',Validators.required),

  });


  constructor(private ticketManagementService: TicketManagementService, private router: ActivatedRoute, private route: Router ) { }

  ticket_Id= this.router.snapshot.params['id'];


  public editTicket(){
    this.ticketManagementService.editTicket(this.postForm.value, this.ticket_Id).subscribe(res => {
      console.log(res);
      this.route.navigate(['/appartement']);
    }
    );
    
  }


}
