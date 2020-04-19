import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './todo/list/list.component';
import { DetailsComponent } from './todo/details/details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
