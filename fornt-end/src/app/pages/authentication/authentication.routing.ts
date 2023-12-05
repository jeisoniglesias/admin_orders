import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './containers/login/login.component';
import { AppSideRegisterComponent } from './containers/register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
    ],
  },
];
