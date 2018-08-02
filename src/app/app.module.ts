import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@hapiness/ng-universal-transfer-http';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { SpecialspageComponent } from './pages/specialspage/specialspage.component';
import { SeoService } from './seo.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    FooterComponent,
    HomepageComponent,
    CarouselComponent,
    SliderComponent,
    AboutpageComponent,
    ContactpageComponent,
    ProductspageComponent,
    ProductpageComponent,
    SpecialspageComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomepageComponent, pathMatch: 'full'},
      { path: 'home', component: HomepageComponent, pathMatch: 'full'},
      { path: 'about', component: AboutpageComponent, pathMatch: 'full'},
      { path: 'contact', component: ContactpageComponent, pathMatch: 'full'},
      { path: 'products', component: ProductspageComponent, pathMatch: 'full'},
      { path: 'chicks', component: SpecialspageComponent, pathMatch: 'full'},
      { path: '*', component: HomepageComponent, pathMatch: 'full'}
    ]),
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'birdscreekfarmsupply' }),
    // Add TransferHttpCacheModule to install a Http interceptor
    TransferHttpCacheModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}