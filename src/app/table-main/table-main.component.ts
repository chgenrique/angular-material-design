import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableMainDataSource } from './table-main-datasource';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MainDialogComponent } from '../main-dialog/main-dialog.component';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css'],
})

export class TableMainComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableMainDataSource;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'action','action2'];

  ngOnInit() {
    this.dataSource = new TableMainDataSource(this.paginator, this.sort);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
