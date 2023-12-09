import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { LoginService } from '../services/api/login.service';
import { NgxPermissionsService } from 'ngx-permissions';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);
  const ngxPermissionService = inject(NgxPermissionsService);

  if (authService.authStatus() === AuthStatus.authenticated) {
    if (authService.getPermisions()) {
      ngxPermissionService.loadPermissions(authService.getPermisions());
    }
    return true;
  }

  router.navigateByUrl('/');
  return false;
};
