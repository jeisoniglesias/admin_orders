import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './views/profile/profile.component';
import { PanelComponent } from './views/panel/panel.component';
import { ChangePassComponent } from './views/change-pass/change-pass.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';


import { MaterialModule } from 'src/app/material.module';
@NgModule({
  declarations: [ProfileComponent, PanelComponent, ChangePassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    NgxPermissionsModule,
    MaterialModule
  ],
})
export class DashboardModule {}
