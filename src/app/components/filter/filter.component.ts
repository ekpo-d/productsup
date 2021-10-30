import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { FilterService } from '../../services/filter.service';
import { DataService } from '../../services/data.service';
import { Filter, ErrorData, OperationMap } from '../../interfaces';
import { contains, equals, gte, lte, notContains, notEqual } from '../../utils';

/**
 * Filter component handles the filtering of the data through filter operations
 */
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filters: Filter[] = [];
  numberOperators: string[] = [
    'less than or equal to',
    'greater than or equal to',
    'equals',
    'does not equal',
  ];
  stringOperators: string[] = [
    'contains',
    'does not contain',
  ];
  operationMap: OperationMap = {
    'less than or equal to': lte,
    'greater than or equal to': gte,
    'equals': equals,
    'does not equal': notEqual,
    'contains': contains,
    'does not contain': notContains,
  }
  states: any = {
    filter: [],
    data: []
  }
  column: string = '';
  operator: string = '';
  filterValue: string = '';
  errorData: ErrorData = {
    display: false,
    message: 'Error: Please fill the form correctly'
  };
  data: any = {};
  filterSubscription: Subscription;
  @Input() headers: string[];

  /**
   * Creates a subscription to the filtered data observable
   */
  constructor(
    private filterService: FilterService,
    private dataService: DataService
  ) {
    this.filterSubscription = this.filterService
      .getData()
      .subscribe(data => {this.data = data});
  }

  ngOnInit(): void {
  }

  /**
   * This checks if a numeric operation or filter can be carried out of the data set
   * by checking if the column contains numbers and if the input value is a number.
   * @param {string} column Criteria by with the data is being filtered
   * @param {string} operator  Operation to be carried out
   * @param {string} value  The value to compare others against
   * @returns True/false depending on the validity of params
   */
  checkNumberOperation(column: string, operator: string, value: string ): boolean {
    const dataProp: string = Object.keys(this.data)[0]
    if (
      this.numberOperators.includes(operator)
      && !isNaN(Number(value))
      && !isNaN(this.data[dataProp][column])
    ) {
      return true;
    }
    return false
  }

  /**
   * This checks if a string operation or filter can be carried out of the data set
   * by checking if the column contains strings and if the input value is a string.
   * @param {string} column Criteria by with the data is being filtered
   * @param {string} operator  Operation to be carried out
   * @param {string} value  The value to compare others against
   * @returns True/false depending on the validity of params
   */
  checkStringOperation(column: string, operator: string, value: string ): boolean {
    const dataProp: string = Object.keys(this.data)[0]
    if (
      this.stringOperators.includes(operator)
      && typeof value === 'string'
      && typeof this.data[dataProp][column] === 'string'
    ) {
      return true;
    }
    return false
  }

  /**
   * This function creates a filter and adds it to the array of filters
   * It checks the validity of a filter operation
   * It updates the filter data via the filter service
   * It also saves the state of the filtered data on each new filter criteria
   * Lastly, it handles showing the user filter operation related error messages
   * @returns Null in event of an error
   */
  addFilter(): null | void {
    if (this.column && this.operator && this.filterValue) {
      this.errorData.display = false;

      if (
        this.checkNumberOperation(this.column, this.operator, this.filterValue)
        || this.checkStringOperation(this.column, this.operator, this.filterValue)
      ) {
        const newData: any = this.operationMap[this.operator](this.data, this.column, this.filterValue);
        this.filterService.setData(newData);

        this.states.data.push(newData);
      }
      else {
        this.errorData = {
          display: true,
          message: 'Error: Operation not possible, please check fields above'
        };
        return null;
      }

      this.filters.push({
        column: this.column,
        operator: this.operator,
        value: this.filterValue
      });
      const filterStringArr = this.filters.map(
        filter => `${filter.column} - ${filter.operator} - ${filter.value}`
      );
      this.states.filter.push(filterStringArr);

      this.column = '';
      this.operator = '';
      this.filterValue = '';
    }
    else {
      this.errorData = {
        display: true,
        message: 'Error: Please fill the form correctly'
      };
    }
  }

  /**
   * This function removes a filter from the filter array
   * It also rewinds the filtered data state based on the filter removed.
   * @param {number} _a  i index of filter
   */
  removeFilter(i: number): void {
    this.filters.splice(i, 1);
    if (this.filters.length === 0) {
      this.resetData()
    }
    else {
      const filterStringArr = this.filters.map(
        filter => `${filter.column} - ${filter.operator} - ${filter.value}`
      );
      
      this.states.filter.map((filterArr: any[], i: number) => {
        if(filterArr.sort().join(',') === filterStringArr.sort().join(',')){
          this.filterService.setData(this.states.data[i])
        }
      })
    }
  }

  /**
   * This function removed all filters and
   * returns the data to it's original state
   */
  resetData(): void {
    this.dataService.getData().subscribe(data => {
      this.filterService.setData(data)
    });
    this.filters = [];
  }
  
  /**
   * Unsubscribes to ensure no memory leaks
   */
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
