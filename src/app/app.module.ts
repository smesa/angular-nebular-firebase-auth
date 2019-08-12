// Angular components
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const BaseComponents = [ CommonModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, HttpClientModule];


// Nebular components
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbCardModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbThemeModule,
  NbLayoutModule,
  NbAlertModule,
  NbButtonModule,
  NbInputModule
} from '@nebular/theme';

const NebularComponents = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbEvaIconsModule,
  NbAlertModule,
  NbButtonModule,
  NbInputModule
];


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Auth components
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth-service.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

// App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, RegisterComponent, RequestPasswordComponent, ResetPasswordComponent

  ],
  imports: [
    BaseComponents,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule, AngularFireAuthModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NebularComponents,
    CoreModule.forRoot(),
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
