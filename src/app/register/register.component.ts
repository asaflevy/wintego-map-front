import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegisterModel} from '../model/user-register.model';
import {UserService} from '../core/service/user.service';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit, OnDestroy {

  regForm: FormGroup;

  constructor(private fb: FormBuilder, private userSrv: UserService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.regForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.email],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.regForm.invalid) {
      return;
    }
    this.userSrv.registerUser(this.regForm.value as UserRegisterModel).pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnDestroy(): void {
  }


}
