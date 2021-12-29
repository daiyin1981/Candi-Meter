import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/auth/login/login.component';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./auth/auth/auth/auth.module')
   .then(auth => auth.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
