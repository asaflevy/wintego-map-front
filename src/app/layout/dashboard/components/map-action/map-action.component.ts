import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../../model/user.model';

@Component({
  selector: 'app-map-action',
  templateUrl: './map-action.component.html',
  styleUrls: ['./map-action.component.less']
})
export class MapActionComponent implements OnInit {

  @Input() showUsersSelection = false;
  @Input() disabled = false;
  @Input() userList: UserModel[] = [];
  @Output() onNewLocationAction = new EventEmitter<boolean>();

  constructor() {
  }

  onAddLocation() {
    this.onNewLocationAction.emit();
  }

  ngOnInit() {
  }

}
