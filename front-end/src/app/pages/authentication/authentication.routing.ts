import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './layouts/login/login.component';
import { AppSideRegisterComponent } from './layouts/register/register.component';

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
