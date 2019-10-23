import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FieldComponent} from './components/field/field.component';
import {HandComponent} from './components/hand/hand.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: FieldComponent },
  { path: 'player', component: HandComponent },
  { path: 'field', component: FieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
