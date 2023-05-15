import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppartementComponent } from './appartement/appartement.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RenterComponent } from './renter/renter.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { EditAppartementComponent } from './edit-appartement/edit-appartement.component';
import { EditRenterComponent } from './edit-renter/edit-renter.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'appartement',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, 
  {
    path: 'appartement',
    component: AppartementComponent, 
    // loadChildren: () => import('./appartement/appartement.module').then( m => m.AppartementPageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'estimate/:id',
    component: EstimateComponent
  },
  {
    path: 'renter/:id',
    component: RenterComponent
  },
  {
    path: 'ticket/:id',
    component: TicketComponent
  },
  {
    path: 'appartement/edit/:id',
    component: EditAppartementComponent
  },
  {
    path: 'renter/edit/:id',
    component: EditRenterComponent
  },
  {
    path: 'ticket/edit/:id',
    component: EditTicketComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
