import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AmbTableDataSource } from './amb-table-datasource';

@Component({
  selector: 'amb-table',
  templateUrl: './amb-table.component.html',
  styleUrls: ['./amb-table.component.scss']
})
export class AmbTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AmbTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AmbTableDataSource(this.paginator, this.sort);
  }
}
