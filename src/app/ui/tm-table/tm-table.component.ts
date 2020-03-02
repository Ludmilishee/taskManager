import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { TableColumnHeader, sortMode } from '../../models/tableData.model';

@Component({
  selector: 'app-tm-table',
  templateUrl: './tm-table.component.html',
  styleUrls: ['./tm-table.component.css']
})
export class TmTableComponent implements OnInit {

  @Input() columns: TableColumnHeader[];
  @Input()
  set data(data) {
    this.tableData = data;
    this.sortTable(this.sortMode);
  }

  private tableData;
  private initialPos: number;
  sortMode: { value: number, field: string } = { value: 0, field: '' };

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onResizeStart(event) {
    this.initialPos = event.pageX;
  }

  onResizeEnd(event) {
    const delta = event.pageX - this.initialPos;
    let currentElWidth = event.target.closest('th').offsetWidth + delta;
    let nextElWidth = event.target.closest('th').nextSibling.offsetWidth - delta;
    const maxAvailableWidth = currentElWidth + nextElWidth - 100;

    if (currentElWidth > maxAvailableWidth) {
      currentElWidth = maxAvailableWidth;
      nextElWidth = 100;
    }
    this.renderer.setStyle(event.target.parentElement, 'width', currentElWidth + 'px');
    this.renderer.setStyle(event.target.parentElement.nextSibling, 'width', nextElWidth + 'px');
  }

  onFilter(column: TableColumnHeader) {
    this.setNextSortMode(column.field);
    this.sortTable(this.sortMode);
  }

  private sortTable({ value, field }) {
    if (!value) {
      return;
    }
    this.tableData.sort((d1, d2) => {
      const orderCoeff = value === sortMode.Asc ? 1 : -1;

      if (d1[field] > d2[field]) {
        return 1 * orderCoeff;
      }
      if (d1[field] < d2[field]) {
        return -1 * orderCoeff;
      }

      return 0;
    });
  }

  private setNextSortMode(field: string) {
    if (this.sortMode.field !== field) {
      this.sortMode.value = 0;
    }
    const value = this.sortMode.value < sortMode.Desc ? ++this.sortMode.value : sortMode.Asc;
    this.sortMode = {
      value,
      field
    };
    console.log(this.sortMode);
  }
}
