import { Component } from '@angular/core';
import { Appartement, PropertyManagementService } from '../property-management.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  appartementList: Appartement[] = [];
  appartement = new Appartement();

  
  


  constructor(private propertyManagementService: PropertyManagementService) { }
  ngOnInit(){
    this.propertyManagementService.getAppartementList().subscribe(
      data => {
        this.appartementList = data;
        console.log(this.appartementList);
      }
    )
  }
  //  fonction to edit an apartment of the list

  editAppart(appartement: Appartement){
    this.propertyManagementService.editAppartement( appartement).subscribe( )
  }

  //fonction to delete an appartements of the list
  deleteAppart(appart_Id: number){
    this.propertyManagementService.deleteAppartement(appart_Id).subscribe()
  }

  // fonction to add an appartement to the list
    addAppart(title: string, description: string, price: any, surface: any, nbRooms: any, address: string){
    
    console.log("le titre est flag 1",title);
    console.log("le prix est flag 1",parseInt(price));

    this.appartement.title = title;
    this.appartement.description = description;
    this.appartement.price = parseInt(price);
    this.appartement.surface = parseInt(surface);
    this.appartement.nbRooms = parseInt(nbRooms);
    this.appartement.address = address;


    console.log(this.appartement);
    this.propertyManagementService.addAppartement(this.appartement).subscribe((res) => {
      console.log(res);
    });

  }
  // fonction to show ticket list
  showTicketList(appart_Id: number){
      this.propertyManagementService.deleteAppartement( appart_Id).subscribe( )
    }
    // this.propertyManagementService.getTicketList().subscribe(
    //   data => {
    //     this.ticketList = data;
    //     console.log(this.ticketList);
    //   }
    // )

    // fonction to show the renter of an apartment
    showRenter (appart_Id: number){
      this.propertyManagementService.deleteAppartement( appart_Id).subscribe( )
    }








}
