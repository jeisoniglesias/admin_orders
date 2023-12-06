import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputComponent } from './error-input/error-input.component';
import { InputComponent } from './input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TablerIconsModule } from 'angular-tabler-icons';

@NgModule({
  declarations: [InputComponent, ErrorInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbAlertModule,
    TablerIconsModule,
  ],
  exports: [
    InputComponent,
    ErrorInputComponent,
    ReactiveFormsModule,
    MaterialModule,
    NgbAlertModule,
  ],
})
export class InputFormModule {}
