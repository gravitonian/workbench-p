import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessAppsRoutingModule } from './process-apps-routing.module';
import { ProcessAppsPageComponent } from './process-apps-page/process-apps-page.component';
import { ProcessAppsListPageComponent } from './process-apps-list-page/process-apps-list-page.component';
import { ProcessAppsDetailsPageComponent } from './process-apps-details-page/process-apps-details-page.component';

import { AppCommonModule } from '../app-common/app-common.module';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';

import { CardViewUpdateService } from 'ng2-alfresco-core';

@NgModule({
  imports: [
    CommonModule,
    ProcessAppsRoutingModule,

    /* Common App imports (Angular Core and Material, ADF Core */
    AppCommonModule,

    /* ADF libs specific to this module */
    ActivitiTaskListModule
  ],
  declarations: [ProcessAppsPageComponent, ProcessAppsListPageComponent, ProcessAppsDetailsPageComponent],
  providers: [CardViewUpdateService] /* Need to set it up as a provider here as there is a bug in CoreModule, it does not import... */
})
export class ProcessAppsModule { }
