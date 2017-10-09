import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMenuService } from './app-menu/app-menu.service';
import { AppCommonModule } from './app-common/app-common.module';
import { AppLoginRoutingModule } from './app-login/app-login-routing.module';
import { AppLoginModule } from './app-login/app-login.module';
import { ProcessAppsModule } from './process-apps/process-apps.module';
import { ProcessAppsRoutingModule } from './process-apps/process-apps-routing.module';
import { MyTasksModule } from './my-tasks/my-tasks.module';
import { MyTasksRoutingModule } from './my-tasks/my-tasks-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    AppLoginModule,
    AppLoginRoutingModule,
    ProcessAppsModule,
    ProcessAppsRoutingModule,
    MyTasksModule,
    MyTasksRoutingModule
  ],
  providers: [AppMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
