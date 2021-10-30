import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';
import { originalOrder } from '../../utils';

/**
 * SideNav component displays a single row of data
 */
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showSideNav: Observable<boolean>;
  navData: Observable<any>;
  
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: string = 'right';
  
  constructor(private uiService: UiService){}

  ngOnInit(): void {
    this.showSideNav = this.uiService.getShowNav();
    this.navData = this.uiService.getNavData();
  }

  /**
   * KeyValue pipe compare fuction, maintains original object property order.
   */
  originalOrder = originalOrder;

  /**
   * Removes the component from view
   */
  onSidebarClose() {
    this.uiService.setShowNav(false);
  }

  /**
   * Handles the postion and display of the component
   */
  getSideNavBarStyle(showNav: boolean | null = false) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }

}
