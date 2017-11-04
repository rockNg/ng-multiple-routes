import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TdcModule } from './components/tdc/tdc.module';
import { EbayModule } from './components/ebay/ebay.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FuckComponent } from './components/fuck/fuck.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FuckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EbayModule,
    TdcModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
