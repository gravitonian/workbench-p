import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskListService, TaskDetailsModel, User } from 'ng2-activiti-tasklist';

@Component({
  selector: 'app-my-tasks-details-page',
  templateUrl: './my-tasks-details-page.component.html',
  styleUrls: ['./my-tasks-details-page.component.css']
})
export class MyTasksDetailsPageComponent implements OnInit {
  taskDetails: TaskDetailsModel;
  taskPeople: User[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private taskListService: TaskListService) { }

  ngOnInit() {
    const taskId = this.activatedRoute.snapshot.params['task-id'];
    console.log('Showing task details for : ', taskId);

    this.taskListService.getTaskDetails(taskId).subscribe(
      (taskDetails: TaskDetailsModel) => {
          this.taskDetails = taskDetails;

        if (this.taskDetails && this.taskDetails.involvedPeople) {
          this.taskDetails.involvedPeople.forEach((user) => {
            this.taskPeople.push(new User(user));
          });
        }
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

  onAttachmentClick() {

  }
}
