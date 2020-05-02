import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListComponent, InfoComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class TodoModule { }
