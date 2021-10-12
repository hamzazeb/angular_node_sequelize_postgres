import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component:RegisterComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent},
  { path: 'profile', component:ProfileComponent},
  // { path: 'create', component:AddUserComponent },
  // {path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},


  // { path: 'view/:id', component: ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
