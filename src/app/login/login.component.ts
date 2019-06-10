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
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authSrv: AuthService) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      const userData = this.form.value;
      this.authSrv.login({email: userData.email, password: userData.password}).subscribe((resData) => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
