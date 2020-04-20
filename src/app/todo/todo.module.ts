import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListComponent, DetailsComponent, InfoComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class TodoModule { }
