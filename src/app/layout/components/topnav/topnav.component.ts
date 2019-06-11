import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../../core/auth/auth.srv';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  public pushRightClass: string;

  constructor(public router: Router, private authSrv: AuthService) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    this.authSrv.logout();
    this.router.navigate(['/login']);
  }

}

