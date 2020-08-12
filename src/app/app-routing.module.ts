import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./major/home/home.component";
import { ProductsComponent } from "./major/products/products.component";
import { OffersComponent } from "./major/offers/offers.component";
import { GalleryComponent } from "./major/gallery/gallery.component";
import { ContactusComponent } from "./major/contactus/contactus.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "offers", component: OffersComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contactus", component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
