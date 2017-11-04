import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TdcModule } from './components/tdc/tdc.module';
import { EbayModule } from './components/ebay/ebay.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
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
