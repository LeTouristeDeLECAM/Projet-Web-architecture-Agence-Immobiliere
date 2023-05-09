import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppartementComponent } from './appartement/appartement.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { EditAppartementComponent } from './edit-appartement/edit-appartement.component';
import { EditRenterComponent } from './edit-renter/edit-renter.component';


const routes: Routes = [
  { path: 'appartement', component: AppartementComponent },
  { path: 'appartement/edit/:id', component: EditAppartementComponent },
  { path: 'estimate/:id', component: EstimateComponent },
  { path: 'renter/:id', component: RenterComponent },
  { path: 'ticket/:id', component: TicketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'renter/edit/:id', component: EditRenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
