import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppartementComponent } from './appartement/appartement.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
  { path: 'appartement', component: AppartementComponent },
  //{ path: 'estimate', component: EstimateComponent },
  // { path: 'renter', component: RenterComponent },
  // { path: 'ticket', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
