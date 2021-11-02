import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { FilterService } from '../../services/filter.service';

/**
 * Table component displays the data retrieved.
 * It also displays the filtered data and houses the other components
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any = {};
  ObjProps: string[];
  headers: string[];
  dataSubscription: Subscription;
  filterSubscription: Subscription;

  /**
   * Creates a subscription to the filtered data observable
   */
  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {
    this.filterSubscription = this.filterService
      .getData()
      .subscribe(data => {this.data = data});
  }

  /**
   * Retrieves the data and sets the filtered data
   */
  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.filterService.setData(data)
      this.ObjProps = Object.keys(data);
      this.headers = Object.keys(this.data[this.ObjProps[0]])
    });
  }

  /**
   * Unsubscribes to ensure no memory leaks
   */
  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }
}
