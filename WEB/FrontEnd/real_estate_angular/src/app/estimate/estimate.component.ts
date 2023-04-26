import { Component } from '@angular/core';
import { Estimate } from '../estimate-management.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EstimateManagementService } from '../estimate-management.service';


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
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    ticket_Id: new FormControl('')
  });

  constructor(private estimateManagementService: EstimateManagementService) { }

  //Get list of estimate
  ngOnInit() { //!!!!!!! change the number in getEstimateList to the ticket_Id of the ticket you want to see the estimate
    this.estimateManagementService.getEstimateList(1).subscribe(
      data => {
        this.estimateList = data;
        console.log(this.estimateList);
      }
    )
  }

  // add an estimate
  addEstimate() {
    // this.estimate.title = this.postForm.value.title;
    // this.estimate.description = this.postForm.value.description;
    // this.estimate.price = this.postForm.value.price;
    // this.estimate.ticket_Id = this.postForm.value.ticket_Id;

    this.estimateManagementService.addEstimate(this.estimate).subscribe()
  }


  // Delete an estimate
  deleteEstimate(estimate_Id: number) {
    this.estimateManagementService.deleteEstimate(estimate_Id).subscribe()
  }


}
