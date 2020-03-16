import { ChangeDetectionStrategy, Component, Input, OnInit, Renderer2 } from '@angular/core';
import { TableColumnHeader, sortMode } from '../../models/tableData.model';

@Component({
  selector: 'tm-table',
  templateUrl: './tm-table.component.html',
  styleUrls: ['./tm-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() columns: TableColumnHeader[];
  @Input()
  set data(data) {
    this.tableData = data;
    this.sortTable(this.selectedSortMode);
  }

  selectedSortMode: { value: number, field: string } = { value: 0, field: '' };
  sortMode = sortMode;

  private readonly COL_MIN_WIDTH = 50;
  private tableData;
  private initialPos: number;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onResizeStart(event) {
    this.initialPos = event.pageX;
  }

  onResizeEnd(event) {
    const th = event.target.parentElement;

    const delta = event.pageX - this.initialPos;
    let currentElWidth = th.offsetWidth + delta;
    let nextElWidth = th.nextSibling.offsetWidth - delta;
    const maxAvailableWidth = currentElWidth + nextElWidth - this.COL_MIN_WIDTH;

    if (currentElWidth > maxAvailableWidth) {
      currentElWidth = maxAvailableWidth;
      nextElWidth = this.COL_MIN_WIDTH;
    }
    if (currentElWidth < this.COL_MIN_WIDTH) {
      currentElWidth = this.COL_MIN_WIDTH;
      nextElWidth = maxAvailableWidth;
    }

    this.renderer.setStyle(th, 'width', `${currentElWidth}px`);
    this.renderer.setStyle(th.nextSibling, 'width', `${nextElWidth}px`);
  }

  onFilter(column: TableColumnHeader) {
    this.setNextSortMode(column.field);
    this.sortTable(this.selectedSortMode);
  }

  private sortTable({ value, field }) {
    if (!value) {
      return;
    }
    this.tableData.sort((d1, d2) => {
      const order = value === sortMode.Asc ? 1 : -1;
      if (d1[field] > d2[field]) {
        return 1 * order;
      }
      if (d1[field] < d2[field]) {
        return -1 * order;
      }

      return 0;
    });
  }

  private setNextSortMode(field: string) {
    if (this.selectedSortMode.field !== field) {
      this.selectedSortMode.value = 0;
    }
    const value = this.selectedSortMode.value < sortMode.Desc ? ++this.selectedSortMode.value : sortMode.Asc;
    this.selectedSortMode = { value, field };
  }
}
