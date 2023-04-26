import { Component } from '@angular/core';
import { Renter } from '../renter-management.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RenterManagementService } from '../renter-management.service';



@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent {
  //create a renter list
  renterList: Renter[] = [];
  //create a renter
  renter = new Renter();

  //create a form group
  postForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    appart_Id: new FormControl('')
  });

  constructor(private renterManagementService: RenterManagementService) { }

  //Get list of renter
  ngOnInit() { 
    this.renterManagementService.getRenterList(2).subscribe(
      data => {
        this.renterList = data;
        console.log(this.renterList);
      }
    )
  }

  // add a renter
  addRenter() {
    // this.renter.firstName = this.postForm.value.firstName;
    // this.renter.lastName = this.postForm.value.lastName;
    // this.renter.email = this.postForm.value.email;
    // this.renter.appart_Id = this.postForm.value.appart_Id;

    this.renterManagementService.addRenter(this.renter).subscribe()
  }

  // Delete a renter
  deleteRenter(renter_Id: number) {
    this.renterManagementService.deleteRenter(renter_Id).subscribe()
  }

  // Update a renter
  updateRenter(renter: Renter) {
    this.renterManagementService.updateRenter(renter).subscribe()
  }



}
