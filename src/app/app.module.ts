import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './minor/menubar/menubar.component';
import { FooterComponent } from './minor/footer/footer.component';
import { SliderComponent } from './minor/slider/slider.component';
import { HomeComponent } from './major/home/home.component';
import { ProductsComponent } from './major/products/products.component';
import { OffersComponent } from './major/offers/offers.component';
import { GalleryComponent } from './major/gallery/gallery.component';
import { ContactusComponent } from './major/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ProductsComponent,
    OffersComponent,
    GalleryComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
