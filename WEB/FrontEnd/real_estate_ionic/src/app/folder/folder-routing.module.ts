import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
