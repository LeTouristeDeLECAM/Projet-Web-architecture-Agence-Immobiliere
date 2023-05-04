import { Component } from '@angular/core';
import { Appartement, PropertyManagementService } from '../property-management.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';



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
    price: new FormControl('', Validators.required),
    surface: new FormControl('',Validators.required),
    nbRooms: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });


  
  


  constructor(private propertyManagementService: PropertyManagementService, private router:Router) { }
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
    this.propertyManagementService.editAppartement( appartement).subscribe();
  }

  //fonction to delete an appartements of the list
  deleteAppart(appart_Id: number){
    this.propertyManagementService.deleteAppartement(appart_Id).subscribe((res) => {
      console.log(res);
      window.location.reload();

    });

  }

  // fonction to add an appartement to the list
  addAppart() {
  // addAppart(title: string, description: string, price: any, surface: any, nbRooms: any, address: string){
    

    console.log(this.postForm.value);

    // if the value in postForm is null, we put the value of the appartement in the form
    if (this.postForm.value.title == null){
      this.appartement.title = "";
    }
    else{this.appartement.title = this.postForm.value.title?.toString();}
    if (this.postForm.value.description == null){
      this.appartement.description = "";
    }
    else{this.appartement.description = this.postForm.value.description?.toString();}


    if (this.postForm.value.price == null){
      this.appartement.price = 0;
    }
    else{this.appartement.price = parseInt(this.postForm.value.price);}

    if (this.postForm.value.surface == null){
      this.appartement.surface = 0;
    }
    else{this.appartement.surface = parseInt(this.postForm.value.surface);}

    if (this.postForm.value.nbRooms == null){
      this.appartement.nbRooms = 0;
    }
    else{this.appartement.nbRooms = parseInt(this.postForm.value.nbRooms);}

    if (this.postForm.value.address == null){
      this.appartement.address = "";
    }
    else{this.appartement.address = this.postForm.value.address?.toString();}

    console.log("Appartement:", this.appartement);


    // this.appartement.title = title.toString();
    // this.appartement.description = description.toString();
    // this.appartement.price = parseInt(price);
    // this.appartement.surface = parseInt(surface);
    // this.appartement.nbRooms = parseInt(nbRooms);
    // this.appartement.address = address.toString();

    // console.log("Appartement:", this.appartement);


    
    this.propertyManagementService.addAppartement(this.appartement).subscribe((res) => {
      console.log(res);
      window.location.reload();

    });


  }
  // fonction to show ticket list
  showTicketList(appart_Id: number){
    console.log("appart_Id:", appart_Id);
    this.router.navigate(['/ticket', appart_Id]);
    }
  
    // fonction to show the renter of an apartment
    showRenter (appart_Id: number){
      console.log("appart_Id renter:", appart_Id);
      this.router.navigate(['/renter', appart_Id]);
      
    }








}
