import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormUtilitiesService } from 'src/app/utils/formUtilities.service';
import { LoginService } from '../../services/api/login.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Swal } from 'src/app/utils/manager-swal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  public formLogin!: FormGroup;
  public errorForm: Array<string> = [];
  public loadingSaving = false;
  constructor(
    public fB: FormBuilder,
    public formUtilities: FormUtilitiesService,
    public loginService: LoginService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
    console.log('AppSideLoginComponent');
  }
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
      { updateOn: 'change' }
    );
  }

  onSubmit(): void {
    this.loadingSaving = true;
    if (this.formLogin.invalid) {
      return;
    }
    const { email, password } = this.formLogin.value;
    this.loginService
      .login(email, password)
      .pipe(take(1))
      .subscribe({
        next: ({ data, response }) => {
          console.log(data);
          this.router.navigateByUrl('/home');
          Swal.success(response.message, true);
        },
        error: (err) => {
          console.log(err);
          this.errorForm = err.error.errors;
          this.loadingSaving = false;
        },
      });
  }
}
