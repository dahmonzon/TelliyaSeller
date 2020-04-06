import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path: 'core', component: CoreComponent, children: []},
  {path: 'auth', component: AuthComponent, children: []},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
