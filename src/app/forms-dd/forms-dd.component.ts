import { Component } from '@angular/core';
import {LoginComponent} from "./auth/login/login.component";
import {LoginReactiveComponent} from "./auth/login-reactive/login-reactive.component";
import {SignupComponent} from "./auth/signup/signup.component";

@Component({
  selector: 'app-forms-dd',
  standalone: true,
  imports: [
    LoginComponent,
    LoginReactiveComponent,
    SignupComponent
  ],
  templateUrl: './forms-dd.component.html'
})
export class FormsDdComponent {

}
