import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/front-page/front-page.module').then(m => m.FrontPageModule)
  },
  { 
    path: 'databinding',
    loadChildren: () => import('./modules/data-binding-page/data-binding-page.module').then(m => m.DataBindingPageModule)
  },
  { 
    path: 'mapweather',
    loadChildren: () => import('./modules/map-weather-page/map-weather-page.module').then(m => m.MapWeatherPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
