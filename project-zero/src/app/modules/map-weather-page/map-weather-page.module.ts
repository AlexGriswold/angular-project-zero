import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapWeatherPageComponent } from './map-weather-page.page';

import { MapWeatherPageRoutingModule } from './map-weather-page-routing.module';

@NgModule({
  declarations: [
    MapWeatherPageComponent
  ],
  imports: [
    CommonModule,
    MapWeatherPageRoutingModule
  ]
})
export class MapWeatherPageModule { }
