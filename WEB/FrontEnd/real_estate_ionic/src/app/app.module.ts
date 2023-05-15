import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppartementComponent } from './appartement/appartement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { EditAppartementComponent } from './edit-appartement/edit-appartement.component';
import { EditRenterComponent } from './edit-renter/edit-renter.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';



@NgModule({
  declarations: [AppComponent, 
    AppartementComponent, 
    TicketComponent,
    EstimateComponent,
    EditTicketComponent,
    EditAppartementComponent,
    EditRenterComponent,
    LoginComponent,
    RenterComponent

  ],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
