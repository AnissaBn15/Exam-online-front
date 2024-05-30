import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { LoginComponent } from './login/login/login.component';
import { VideoComponent } from './video/video/video.component';
import { QcmtestComponent } from './qcmtest/qcmtest/qcmtest.component';
import { ResultComponent } from './result/result/result.component';
import { ValidationComponent } from './validation/validation/validation.component';

const routes: Routes = [
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'video', component: VideoComponent },
  {path: 'validation/:id', component: ValidationComponent},
  {path: 'qcmtest/:id', component: QcmtestComponent},
  {path: 'result/:id', component: ResultComponent},
  { path: '', redirectTo: 'Welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
