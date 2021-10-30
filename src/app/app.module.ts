import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/row/row.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    SideNavComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
