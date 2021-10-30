import { Component, OnInit, Input } from '@angular/core';

import { UiService } from '../../services/ui.service';
import { originalOrder } from '../../utils';

/**
 * Row component displays a row of data,
 * handles whether the SideNav being shown or not.
 */
@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() data: any;
  @Input() item: object;

  constructor(private uiService: UiService){}

  ngOnInit(): void {
  }

  /**
   * KeyValue pipe compare fuction, maintains original object property order.
   */
  originalOrder = originalOrder;

  /**
   * Toggles the display of the SideNav
   * @param {any} item Row of data
   */
  toggleSideNav(item: any) {
    this.uiService.setShowNav(true);
    this.uiService.setNavData(item);
  }
}
