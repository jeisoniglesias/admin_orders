import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AuthenticationRoutes } from './authentication.routing';

import { AppSideLoginComponent } from './containers/login/login.component';
import { AppSideRegisterComponent } from './containers/register/register.component';
import { InputFormModule } from '../ui-components/input-form/input-form.module';
import { InputComponent } from '../ui-components/input-form/input/input.component';

@NgModule({
  declarations: [AppSideLoginComponent, AppSideRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    InputFormModule,
  ],
  exports: [ReactiveFormsModule],
})
export class AuthenticationModule {}
