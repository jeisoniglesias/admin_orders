import { Component, computed, effect } from '@angular/core';
import { LoginStateService } from './pages/authentication/services/state/login.state.service';
import { AuthStatus } from './pages/authentication/types/login.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Admin Orders';
  constructor(
    public loginStateService: LoginStateService,
    public router: Router
  ) {}
  ngOnInit() {
    this.loginStateService.initialize();
  }
}
