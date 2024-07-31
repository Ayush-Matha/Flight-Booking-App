import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject} from '@angular/core';
import { Router } from '@angular/router';

export const authAdminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAuthenticated())
  {
    return true;
  }
  else
  {
    return false;
  }
  
};
