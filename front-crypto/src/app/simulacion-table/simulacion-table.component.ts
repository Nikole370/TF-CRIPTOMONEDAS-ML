import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { SimulacionTableDataSource, SimulacionTableItem } from './simulacion-table-datasource';

@Component({
  selector: 'app-simulacion-table',
  templateUrl: './simulacion-table.component.html',
  styleUrl: './simulacion-table.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class SimulacionTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SimulacionTableItem>;
  dataSource = new SimulacionTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
