import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { AppDefinitionRepresentationModel, TaskListComponent } from 'ng2-activiti-tasklist';
import { DataColumn } from 'ng2-alfresco-datatable';

@Component({
  selector: 'app-my-tasks-list-page',
  templateUrl: './my-tasks-list-page.component.html',
  styleUrls: ['./my-tasks-list-page.component.css']
})
export class MyTasksListPageComponent implements OnInit {
  appId: number;
  appName: string;
  taskTypeName: string;
  taskState: string;
  taskAssignment: string;

  /* Create a filter that will exclude the Task List App and include only new custom apps */
  processAppsFilter = [ { tenantId: 1 } ];

  @ViewChild(TaskListComponent)
  taskList;

  constructor(private router: Router) {
    this.taskTypeName = 'Open (Assigned)';
    this.taskState = 'active';
    this.taskAssignment = 'assignee';
  }

  ngOnInit() {
  }

  onTodoFilter(displayTaskType: string) {
    console.log('Changed tasks to show : ', displayTaskType);

    if (displayTaskType === 'openAssigned') {
      this.taskTypeName = 'Open (Assigned)';
      this.taskState = 'active';
      this.taskAssignment = 'assignee';
    } else if (displayTaskType === 'openPooled') {
      this.taskTypeName = 'Open (Pooled)';
      this.taskState = 'active';
      this.taskAssignment = 'candidate';
    } else if (displayTaskType === 'completed') {
      this.taskTypeName = 'Completed';
      this.taskState = 'completed';
      this.taskAssignment = '';
    }
  }

  onAppClick(appDef: AppDefinitionRepresentationModel) {
    console.log('Task state: ' , this.taskState, ' assignment : ', this.taskAssignment, ' Selected App : ', appDef);

    if (appDef) {
      this.appId = appDef.id;
      this.appName = appDef.name;
    }
  }

  onTaskClick(id: string) {
    console.log('Navigating to Task Details : ', id);

    this.router.navigate(['/my-tasks', id]);
  }
}
