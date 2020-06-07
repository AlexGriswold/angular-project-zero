import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    DataBindingPageComponent
  } from './data-binding-page.page';

  const dataBindingPageRoutes: Routes = [
    {
      path: '',
      component: DataBindingPageComponent,
    },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(dataBindingPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class DataBindingRoutingModule { }
  