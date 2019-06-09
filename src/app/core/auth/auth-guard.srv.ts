import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.srv';

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
