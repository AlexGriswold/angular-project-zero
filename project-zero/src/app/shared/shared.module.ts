import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav';
import { ContactBtnComponent } from './contact-btn';

@NgModule({
  declarations: [
    NavComponent,
    ContactBtnComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavComponent,
    ContactBtnComponent
  ]
})
export class SharedModule { }
