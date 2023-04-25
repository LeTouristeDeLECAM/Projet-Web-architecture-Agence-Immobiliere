import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppartementComponent } from './appartement/appartement.component';
import { TicketComponent } from './ticket/ticket.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppartementComponent,
    TicketComponent,
    EstimateComponent,
    RenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
