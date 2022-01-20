import { NotFoundComponent } from './views/not-found/not-found.component';
import { TodosEditComponent } from './views/todos-edit/todos-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosHomeComponent } from './views/todos-home/todos-home.component';

const routes: Routes = [
  { path: '', component: TodosHomeComponent},
  { path: 'edit/:id', component: TodosEditComponent },
  { path: 'edit', component: TodosEditComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
