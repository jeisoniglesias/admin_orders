import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './views/panel/panel.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChangePassComponent } from './views/change-pass/change-pass.component';
import { ngxPermissionsGuard } from 'ngx-permissions';
import { NavItem } from 'src/app/layouts/full/sidebar/nav-item/nav-item';

enum permissions {
  profile = 'me.profile',
  resetPassword = 'me.resetPassword',
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: PanelComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ngxPermissionsGuard],
        data: {
          permissions: {
            only: [permissions.profile],
            redirectTo: '/home',
          },
        },
      },
      {
        path: 'change-password',
        component: ChangePassComponent,
        canActivate: [ngxPermissionsGuard],

        data: {
          permissions: {
            only: [permissions.resetPassword],
            redirectTo: '/home',
          },
        },
      },
    ],
  },
];

export const navItemsDashboard: NavItem[] = [
  {
    navCap: 'Home',
    permissionRequired: [],
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/home',
    permissionRequired: [],
  },
  {
    displayName: 'Profile',
    iconName: 'layout-dashboard',
    route: '/profile',
    permissionRequired: [permissions.profile],
  },
  {
    displayName: 'Reset Password',
    iconName: 'layout-dashboard',
    route: '/change-password',
    permissionRequired: [permissions.resetPassword],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
