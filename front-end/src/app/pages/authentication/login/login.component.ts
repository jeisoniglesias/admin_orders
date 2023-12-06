import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormUtilitiesService } from 'src/app/utils/formUtilities.service';

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
    public formUtilities: FormUtilitiesService
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
  }
}
