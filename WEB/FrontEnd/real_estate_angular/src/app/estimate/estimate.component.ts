import { Component } from '@angular/core';
import { Estimate } from '../estimate-management.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EstimateManagementService } from '../estimate-management.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent {
  // create a list of estimate
  estimateList: Estimate[] = [];
  // create an estimate
  estimate = new Estimate();

  //create a form group
  postForm = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    ticket_Id: new FormControl('',Validators.required)
  });

  constructor(private estimateManagementService: EstimateManagementService,  private router: ActivatedRoute, private route: Router) { }

  id = this.router.snapshot.params['id'];

  //Get list of estimate
  ngOnInit() { //!!!!!!! change the number in getEstimateList to the ticket_Id of the ticket you want to see the estimate
    this.estimateManagementService.getEstimateList(this.id).subscribe(
      data => {
        this.estimateList = data;
        console.log(this.estimateList);
      }
    )
  }

  // add an estimate
  addEstimate() {
    console.log(this.postForm.value);
    
    this.estimateManagementService.addEstimate( this.postForm.value).subscribe(res => {
      console.log(res);
    }
    );


  }


  // Delete an estimate
  deleteEstimate(estimate_Id: number) {
    this.estimateManagementService.deleteEstimate(estimate_Id).subscribe()
  }


}
