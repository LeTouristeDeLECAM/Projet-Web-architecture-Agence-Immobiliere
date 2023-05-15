import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RenterManagementService } from '../renter-management.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-renter',
  templateUrl: './edit-renter.component.html',
  styleUrls: ['./edit-renter.component.css']
})
export class EditRenterComponent {

  postForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  constructor(private renterManagementService: RenterManagementService, private router: ActivatedRoute, private route: Router ) { }
  
  appart_Id= this.router.snapshot.params['id'];

  public editRenter(){
    // this.renterManagementService.getRenterList(this.appart_Id).subscribe( res => {
    //   console.log("response :  ",res);
    //   console.log("response renter Id :  ",res.renter_Id);

    //   this.renterManagementService.editRenter(this.postForm.value, this.appart_Id, res.renter_Id).subscribe(res2 => {
    //     console.log(res2);
    //     this.route.navigate(['/renter', this.appart_Id]);
    //   }
    //   );
    // });

    this.renterManagementService.editRenter(this.postForm.value, this.appart_Id).subscribe(res2 => {
      console.log(res2);
      this.route.navigate(['/renter', this.appart_Id]);
    }
    );
    
  }


}
