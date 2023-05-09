import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PropertyManagementService } from '../property-management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-edit-appartement',
  templateUrl: './edit-appartement.component.html',
  styleUrls: ['./edit-appartement.component.css']
})
export class EditAppartementComponent {

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('', Validators.required),
    surface: new FormControl('',Validators.required),
    nbRooms: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });

  constructor(private PropertyManagementService: PropertyManagementService, private router: ActivatedRoute, private route: Router) { }
  appart_Id= this.router.snapshot.params['id'];

  editAppart(){
    console.log(this.postForm.value);

    this.PropertyManagementService.editAppartement( this.postForm , this.appart_Id).subscribe(res => {
      console.log(res);
      this.route.navigate(['/appartement']);
    })
  }

  // cancel(){
  //   this.route.navigate(['/appartement']);
  // }


}
