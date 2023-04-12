import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{path:'', redirectTo:'/view', pathMatch:"full"},
{path: "view", component:ViewComponent},
{path: "register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
