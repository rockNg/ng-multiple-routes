import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TdcComponent } from './tdc.component';
import { PilotComponent } from './pilot/pilot.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { FuckComponent } from '../fuck/fuck.component';

const appRoutes: Routes = [
	{
	  path: 'tdc',
	  component: TdcComponent,
	  // outlet: 'popup'
	  children: [
	  	{
	  		path: '',
	  		children: [
	  			{
	  				path: 'pilot',
	  				component: PilotComponent
	  			},
	  			{
						path: 'workflow',
						component: WorkflowComponent,
						data: { preload: true },
					},
					{
						path: 'fuck',
						component: FuckComponent,
						outlet: 'popup'
					},
					{
						path: '',
						redirectTo: '/tdc/pilot',
						pathMatch: 'full' 
					}
	  		]
	  	}
	  ]
	}
	// { path: '', redirectTo: '/tdc', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
			appRoutes,
			// { enableTracing: true } // <-- debugging purposes only
		)
  ],
  declarations: [],
  exports: [
	  RouterModule
  ]
})
export class TdcRoutingModule { }
