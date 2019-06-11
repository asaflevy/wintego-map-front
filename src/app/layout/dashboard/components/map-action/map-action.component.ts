import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-map-action',
  templateUrl: './map-action.component.html',
  styleUrls: ['./map-action.component.less']
})
export class MapActionComponent implements OnInit {

  @Output() onNewLocationAction = new EventEmitter<boolean>();

  constructor() {
  }

  onAddLocation() {
    this.onNewLocationAction.emit();
  }

  ngOnInit() {
  }

}
