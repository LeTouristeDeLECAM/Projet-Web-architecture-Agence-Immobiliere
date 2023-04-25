import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // I'm not sure if this is needed
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppartementComponent } from './appartement/appartement.component';
import { TicketComponent } from './ticket/ticket.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }