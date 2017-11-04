import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EbayComponent } from './ebay.component';
	import { PaypalComponent } from './paypal/paypal.component';
	import { StubhubComponent } from './stubhub/stubhub.component';
	import { Close5Component } from './close5/close5.component';

const ebayRoutes: Routes = [
  {
    path: '',
    component: EbayComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'close5', component: Close5Component },
          { path: 'paypal', component: PaypalComponent },
          { path: 'stubhub', component: StubhubComponent },
          { path: '', redirectTo: '/ebay/stubhub', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
			ebayRoutes
		)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class EbayRoutingModule { }
