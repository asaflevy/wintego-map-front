import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../../core/auth/auth.srv';
import * as fromUsers from '../../../store/users';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.less']
})
export class TopnavComponent implements OnInit {
  public pushRightClass: string;
  private user;

  constructor(public router: Router, private authSrv: AuthService, private store: Store) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
    this.user = this.authSrv.getCurrentUser();

  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    this.store.dispatch(new fromUsers.ClearUserData());
    this.authSrv.logout();
    this.router.navigate(['/login']);
  }

}

