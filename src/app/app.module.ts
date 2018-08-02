import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@hapiness/ng-universal-transfer-http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'birdscreekfarmsupply' }),
    // Add TransferHttpCacheModule to install a Http interceptor
    TransferHttpCacheModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}