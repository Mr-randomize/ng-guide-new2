import { Component } from '@angular/core';
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [
    WelcomeComponent
  ],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.css'
})
export class DeferrableViewsComponent {

}
