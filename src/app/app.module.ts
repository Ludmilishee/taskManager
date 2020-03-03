import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TmTableComponent } from './ui/tm-table/tm-table.component';
import { TmToggleButtonComponent } from './ui/tm-toggle-button/tm-toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TmTableComponent,
    TmToggleButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
