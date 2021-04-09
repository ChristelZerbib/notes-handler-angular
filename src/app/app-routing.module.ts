import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './services/login-guard.service';

const routes: Routes = [
  {path: 'home', component: MainComponent, canActivate: [LoginGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
