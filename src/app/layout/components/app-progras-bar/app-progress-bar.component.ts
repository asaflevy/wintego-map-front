import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './app-progress-bar.component.html',
  styleUrls: ['./app-progress-bar.component.less'],
})
export class ProgressBarComponent implements OnInit {

  @Input() isLoading = false;

  ngOnInit() {
  }


}
