import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessAppsPageComponent } from './process-apps-page/process-apps-page.component';
import { ProcessAppsListPageComponent } from './process-apps-list-page/process-apps-list-page.component';
import { ProcessAppsDetailsPageComponent } from './process-apps-details-page/process-apps-details-page.component';

import { AuthGuardBpm } from 'ng2-alfresco-core';

const routes: Routes = [ {
  path: 'process-apps',
  component: ProcessAppsPageComponent,
  canActivate: [AuthGuardBpm],
  data: {
    hidden: false,
    title: 'Process Apps',
    needEcmAuth: false,
    needBpmAuth: true,
    isLogin: false
  },
  children: [
    { path: '', component: ProcessAppsListPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-app-id', component: ProcessAppsDetailsPageComponent, canActivate: [AuthGuardBpm] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessAppsRoutingModule { }
