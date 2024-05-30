import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { QcmtestComponent } from './qcmtest/qcmtest/qcmtest.component';
import { ResultComponent } from './result/result/result.component';
import { VideoComponent } from './video/video/video.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { WebcamModule } from 'ngx-webcam';
import { QcmquestionService } from './qcmquestion.service';
import { WebsocketService } from './websocket.service';
import { StudentsService } from './students.service';
import { ValidationComponent } from './validation/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QcmtestComponent,
    ResultComponent,
    VideoComponent,
    WelcomeComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],

  providers: [QcmquestionService,
  WebsocketService,
  StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
