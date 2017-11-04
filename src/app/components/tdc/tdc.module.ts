import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdcRoutingModule } from './tdc-routing.module';
import { TdcComponent } from './tdc.component'; 
import { PilotComponent } from './pilot/pilot.component';
import { WorkflowComponent } from './workflow/workflow.component';

@NgModule({
  imports: [
    CommonModule,
    TdcRoutingModule
  ],
  declarations: [
    TdcComponent,
  	PilotComponent,
  	WorkflowComponent
  ]
})
export class TdcModule { }
