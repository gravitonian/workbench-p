import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskListService } from 'ng2-activiti-tasklist';
import { StartProcessInstanceComponent, ProcessInstance } from 'ng2-activiti-processlist';

@Component({
  selector: 'app-start-process-page',
  templateUrl: './start-process-page.component.html',
  styleUrls: ['./start-process-page.component.css']
})
export class StartProcessPageComponent implements OnInit {
  appId: number;
  appName: string;

  @ViewChild(StartProcessInstanceComponent)
  startProcessForm: StartProcessInstanceComponent;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private taskListService: TaskListService) { }

  ngOnInit() {
    this.appId = +this.activatedRoute.snapshot.params['process-app-id'];
    console.log('Start Process for app: ', this.appId);
    this.taskListService.getApplicationDetailsById(this.appId).subscribe(
      (appDef: any) => {
        this.appName = appDef.name;
      },
      (error) => {
        console.log('Error: ', error);
      });
  }

  onGoBack($event: Event) {
    this.navigateBack2AppList();
  }

  private navigateBack2AppList() {
    this.router.navigate(['../'],
      {
        relativeTo: this.activatedRoute
      });
  }

  onStartProcessInstance(procInstance: ProcessInstance) {
    console.log('Started process instance: ', procInstance.id);
    this.startProcessForm.reset();

  }

  onCancelProcessInstance() {
    console.log('Starting Process was cancelled.');
    this.startProcessForm.reset();
  }

  onStartError(error: any) {
    console.log('There was an error starting process: ', error);
  }
}
