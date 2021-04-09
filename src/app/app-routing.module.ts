import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './services/login-guard.service';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: MainComponent, canActivate: [LoginGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
