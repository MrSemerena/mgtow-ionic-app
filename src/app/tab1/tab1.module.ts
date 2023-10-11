import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomeHeaderSliderComponent } from './components/home-header-slider/home-header-slider.component';
import { HomeBodyBannersComponent } from './components/home-body-banners/home-body-banners.component';
import { HomeBodyCardsComponent } from './components/home-body-cards/home-body-cards.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    HomeHeaderSliderComponent,
    HomeBodyBannersComponent,
    HomeBodyCardsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule {}
