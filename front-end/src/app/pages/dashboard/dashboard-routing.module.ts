import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './views/panel/panel.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChangePassComponent } from './views/change-pass/change-pass.component';

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
      },
      {
        path: 'change-password',
        component: ChangePassComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
