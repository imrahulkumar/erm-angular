import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordBoxedComponent } from './forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './register-boxed/register-boxed.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  { path: "forgot", component: ForgotPasswordBoxedComponent },
  { path: "login", component: LoginBoxedComponent },
  { path: "signup", component: RegisterBoxedComponent }
]

@NgModule({
  declarations: [
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
