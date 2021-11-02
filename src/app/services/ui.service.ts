/**
 * The UI service handles interactions between components that directly
 * affect the UI e.g notications and change events
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private navData$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  getShowNav(){
    return this.showNav$.asObservable();
  }

  setShowNav(display: boolean) {
    this.showNav$.next(display);
  }

  getNavData(){
    return this.navData$.asObservable();
  }

  setNavData(item: boolean) {
    this.navData$.next(item);
  }
}
