import { Component, OnInit, inject } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtilitiesService } from 'src/app/utils/formUtilities.service';
import { LoginStateService } from '../../services/state/login.state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  formLogin!: FormGroup;
  public errorForm: Array<string> = [];
  public loadingSaving = false;

  constructor(
    public fB: FormBuilder,
    public formUtilities: FormUtilitiesService,
    public loginStateService: LoginStateService
  ) {}

  private initForm(): void {
    this.formLogin = this.fB.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.minLength(8),
        ]),
        password: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),
      },
      { updateOn: 'blur' }
    );
  }
  ngOnInit(): void {
    this.initForm();
    console.log('AppSideLoginComponent');
  }
  onSubmit(): void {
    this.loadingSaving = true;
    this.loginStateService.onSubmit(this.formLogin);
    console.log();
  }
}
