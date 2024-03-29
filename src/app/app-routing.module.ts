import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/tabla",
  },
  {
    path:"tabla",
    component:TablaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
