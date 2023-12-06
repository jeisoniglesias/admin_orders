import { Component, Input } from '@angular/core';
import { DefaultErrorMessages } from './error-input.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'com-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent {
  @Input() public controlName?: string;
  @Input() public formContained!: AbstractControl;
  private get currentControl(): AbstractControl | null {
    if (this.formContained && this.controlName) {
      return this.formContained instanceof FormGroup
        ? this.formContained.get(this.controlName)
        : this.formContained;
    }
    return null;
  }

  protected get error(): string {
    const errorMessage = this.currentControl?.errors
      ? this.getErrorMessage(this.currentControl?.errors)
      : '';
    return errorMessage;
  }
  private getErrorMessage(errors: Record<string, any>): string {
    const [errorName] = Object.keys(errors);
    const errorFunction = DefaultErrorMessages[errorName];
    if (errorFunction) {
      return errorFunction(errors[errorName]);
    } else {
      return 'An error occurred';
    }
  }
  @Input()
  data!: { [key: string]: boolean };
  @Input()
  label!: string;
  public mesage: string = '';
  getErro2r() {
    const [errorName] = Object.keys(this.data);
    const errorFunction = DefaultErrorMessages[errorName];

    if (!errorFunction) {
      return 'An error occurred';
    }
    /*     
    if (this.data['required']) {
      this.mesage = `Campo requerido`;
    } else if (this.data['email']) {
      this.mesage = 'Correo invalido';
    } else if (this.data['minlength']) {
      this.mesage = 'Minimo 8 caracteres';
    } */
    return errorFunction;
  }
}
