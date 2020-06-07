import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    FrontPageComponent
  } from './front-page.page';

  const frontPageRoutes: Routes = [
    {
      path: '',
      component: FrontPageComponent,
    },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(frontPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class FrontPageRoutingModule { }
  