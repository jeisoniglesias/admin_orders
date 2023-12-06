import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './views/profile/profile.component';
import { PanelComponent } from './views/panel/panel.component';
import { ChangePassComponent } from './views/change-pass/change-pass.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, PanelComponent, ChangePassComponent],
  imports: [CommonModule, ReactiveFormsModule, DashboardRoutingModule],
})
export class DashboardModule {}
