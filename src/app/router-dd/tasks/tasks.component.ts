import {Component, inject, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {ResolveFn, RouterLink} from "@angular/router";
import {Task} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    RouterLink
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();

  // userId = input.required<string>();
  // // order = input<'asc' | 'desc'>();
  // order = signal<'asc' | 'desc'>('desc');
  // private tasksService = inject(TasksService);
  // userTasks = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((task) => task.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'desc') {
  //         return a.id > b.id ? -1 : 1;
  //       } else {
  //         return a.id > b.id ? 1 : -1;
  //       }
  //     })
  // );
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  //
  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.queryParams.subscribe({
  //     next: (params) => this.order.set(params['order']),
  //   });
  //
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}


export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
