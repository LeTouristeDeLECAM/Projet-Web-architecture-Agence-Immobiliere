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

  postForm = new FormGroup({
    
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    surface: new FormControl(''),
    nbRooms: new FormControl(''),
    address: new FormControl('')
  });
  
  


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
   addAppart( ){
    //address: string, nbRooms: number, surface: number, price: number, description: string, title: string
    //addAppart(  appartement: Appartement ){
    //this.appartement = new Appartement();
    console.log("le titre est flag 1",this.postForm.value);

    // this.appartement.address= this.postForm.value.address?.toString();
    // this.appartement.nbRooms= this.postForm.value.nbRooms;
    // this.appartement.surface= this.postForm.value.surface;
    // this.appartement.price =  this.postForm.value.price;
    // this.appartement.description = this.postForm.value.description;
    // this.appartement.title =  this.postForm.value.title;

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
