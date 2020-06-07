import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    MapWeatherPageComponent
  } from './map-weather-page.page';

  const mapWeatherPageRoutes: Routes = [
    {
      path: '',
      component: MapWeatherPageComponent,
    },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(mapWeatherPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class MapWeatherPageRoutingModule { }
  