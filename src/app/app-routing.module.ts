import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';
import { OfflineComponent } from './offline/offline.component'; 

const routes: Routes = [
  {
    path: "todo",
    component: TodoComponent
  },
  {
    path: "offline",
    component: OfflineComponent
  },
  {
    path: "",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
