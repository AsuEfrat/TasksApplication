import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './Components/tasks-page/tasks-page.component';


const routes: Routes = [
  {path:'',component:TasksPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
