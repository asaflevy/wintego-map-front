import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggerModel} from '../../../../model/Ilogger.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-logger-details',
  templateUrl: './logger-details.component.html',
  styleUrls: ['./logger-details.component.less']
})
export class LoggerDetailsComponent implements OnInit, AfterContentInit {

  @Input() loggerDetail: LoggerModel[];
  @Output() onMarkerSelected = new EventEmitter();
  displayedColumns: string[] = ['created_date', 'ip', 'city', 'region_code', 'longitude', 'latitude', 'message'];
  dataSource: MatTableDataSource<LoggerModel> = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.dataSource = new MatTableDataSource(this.loggerDetail);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowSelected(row: LoggerModel) {
    this.onMarkerSelected.emit(row);

  }


}
