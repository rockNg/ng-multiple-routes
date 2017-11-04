import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbayRoutingModule } from './ebay-routing.module';
import { EbayComponent } from './ebay.component';
import { PaypalComponent } from './paypal/paypal.component';
import { StubhubComponent } from './stubhub/stubhub.component';
import { Close5Component } from './close5/close5.component';

@NgModule({
  imports: [
    CommonModule,
    EbayRoutingModule
  ],
  declarations: [
  	EbayComponent,
  	
  	PaypalComponent,
  	StubhubComponent,
  	Close5Component
  ]
})
export class EbayModule { }
