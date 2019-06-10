import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.srv';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authSrv: AuthService) {
  }

  canActivate() {
    if (this.authSrv.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
