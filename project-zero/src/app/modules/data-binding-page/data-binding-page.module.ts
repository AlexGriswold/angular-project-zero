import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingPageComponent } from './data-binding-page.page';

import { DataBindingRoutingModule } from './data-binding-page-routing.module'

@NgModule({
  declarations: [
    DataBindingPageComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingPageModule { }
