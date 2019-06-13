import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth/auth.srv';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authSrv: AuthService) {
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  submit() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      this.authSrv.login({email: userData.email, password: userData.password}).subscribe((resData) => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
