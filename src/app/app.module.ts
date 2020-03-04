import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TableComponent } from './ui/tm-table/tm-table.component';
import { ToggleButtonComponent } from './ui/tm-toggle-button/tm-toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TableComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
