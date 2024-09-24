import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsDdComponent} from "./forms-dd/forms-dd.component";
import {RouterDdComponent} from "./router-dd/router-dd.component";
import {DeferrableViewsComponent} from "./deferrable-views/deferrable-views.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsDdComponent, RouterDdComponent, DeferrableViewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-guide-new2';
}
