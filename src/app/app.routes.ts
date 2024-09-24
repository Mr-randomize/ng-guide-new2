import {CanMatchFn, RedirectCommand, Router, Routes} from '@angular/router';
import {NoTaskComponent} from "./router-dd/tasks/no-task/no-task.component";
import {resolveTitle, resolveUserName, UserTasksComponent} from "./router-dd/users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./router-dd/not-found/not-found.component";
import {routes as userRoutes} from './router-dd/users/users.routes';
import {inject} from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
    title: 'No task selected'
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    // children: userRoutes,
    loadChildren: () => import('./router-dd/users/users.routes').then(mod => mod.routes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!'
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
