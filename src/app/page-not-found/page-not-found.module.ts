import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundEditComponent } from './pages/page-not-found-edit/page-not-found-edit.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageNotFoundEditComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
