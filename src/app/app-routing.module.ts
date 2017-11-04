import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TdcModule } from './components/tdc/tdc.module';
import { EbayModule } from './components/ebay/ebay.module';
import { EbayComponent } from './components/ebay/ebay.component';
import { FuckComponent } from './components/fuck/fuck.component';

import { OuterComponent } from './components/outer/outer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
	// {
	//   path: 'ebay',
	//   component: EbayComponent,
	//   // outlet: 'popup'
	// },
	{
		path: 'ebay',
		loadChildren: 'app/components/ebay/ebay.module#EbayModule',
		// data: { preload: true }
	},
/*	{
		path: 'tdc',
		loadChildren: 'app/components/tdc/tdc.module#TdcModule',
		data: { preload: true }
	},*/
	{
		path: 'outer',
		component: OuterComponent,
		outlet: 'outerOutlet'
	},
	// {
	// 	path: 'fuck',
	// 	component: FuckComponent,
	// 	outlet: 'outerOutlet2'
	// },
	{ path: '', redirectTo: '/tdc', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true } // <-- debugging purposes only
		)
  ],
  declarations: [

  ],
  exports: [
	  RouterModule
  ]
})
export class AppRoutingModule { }
