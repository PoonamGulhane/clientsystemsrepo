import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { SelectComponent } from './select/select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path:'listing',
    component: ListingComponent
  },
  {
  path:'new',
  component: NewComponent
  },
  {
    path:'view/:id',
    component: ViewComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'select',
    component: SelectComponent
  }
]

@NgModule({
  declarations: [
    ListingComponent,
    NewComponent,
    EditComponent,
    ViewComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
