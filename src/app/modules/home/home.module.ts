import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSearchBoxComponent } from '../home/components/home-search-box/home-search-box.component';
import { HomeSearchResultComponent } from '../home/components/home-search-result/home-search-result.component';


@NgModule({
  declarations: [HomeComponent, HomeSearchBoxComponent, HomeSearchResultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
