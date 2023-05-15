import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RenterManagementService } from '../renter-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-renter',
  templateUrl: './edit-renter.component.html',
  styleUrls: ['./edit-renter.component.scss'],
})
export class EditRenterComponent  {

  postForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  constructor(private renterManagementService: RenterManagementService, private router: ActivatedRoute, private route: Router ) { }
  
  renter_Id= this.router.snapshot.params['id'];

  public editRenter(){
    this.renterManagementService.editRenter(this.postForm.value, this.renter_Id).subscribe(res => {
      console.log(res);
      this.route.navigate(['/renter']);
    }
    );
  }
}
