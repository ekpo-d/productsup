/**
 * The filter service handles interactions between components that directly
 * affect shared data e.g data retrieved from the API or filtered data
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filteredData = new Subject<any>();

  constructor() { }

  getData(): Observable<any> {
    return this.filteredData.asObservable();
  }

  setData(data: any): void {
    this.filteredData.next(data);
  }
}
