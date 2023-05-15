import { Component, OnInit } from '@angular/core';
import { Renter } from '../renter-management.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RenterManagementService } from '../renter-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.scss'],
})
export class RenterComponent  {
  //create a renter list
  renterList: Renter[] = [];
  //create a renter
  renter = new Renter();

  // id : number | undefined |any;


  //create a form group
  postForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  constructor(private renterManagementService: RenterManagementService, private router: ActivatedRoute, private route: Router ) { }
  
  appart_Id= this.router.snapshot.params['id'];

  //Get list of renter
  ngOnInit() { 
    this.renterManagementService.getRenterList(this.appart_Id).subscribe(
      data => {
        this.renterList = data;
        console.log(this.renterList);
      }
    )
  }

  // add a renter
  addRenter() {

    console.log(this.postForm.value);

    // this.renter.appart_Id=this.id;
    // this.renter.email=this.postForm.email.toString;

    
    this.renterManagementService.addRenter( this.postForm.value, this.appart_Id).subscribe(res => {
      console.log(res);
      window.location.reload();
    }
    );
    
  }

  // Delete a renter
  deleteRenter() {
    this.renterManagementService.deleteRenter(this.appart_Id).subscribe(res => {
      console.log(res);
      window.location.reload();
    }
    );
    
  }

  // Update a renter
  updateRenter(renter: Renter) {
    //this.renterManagementService.updateRenter(renter).subscribe()
    this.route.navigate(['renter/edit', renter.renter_Id]);

  }



}
