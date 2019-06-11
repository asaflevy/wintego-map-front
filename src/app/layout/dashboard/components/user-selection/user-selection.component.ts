import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../model/user.model';
import {UserService} from '../../../../core/service/user.service';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.less']
})
export class UserSelectionComponent implements OnInit {
  @Input() userList: UserModel[];

  constructor(private userSrv: UserService) {
  }

  ngOnInit() {
  }

  onUserChange($event) {
    this.userSrv.setSelectedUser($event.value);
  }

}
