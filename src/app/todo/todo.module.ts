import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, InfoComponent],
  imports: [CommonModule],
})
export class TodoModule { }
