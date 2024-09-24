import { Component } from '@angular/core';
import {UsersComponent} from "./users/users.component";
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-router-dd',
  standalone: true,
  imports: [
    UsersComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './router-dd.component.html',
  styleUrl: './router-dd.component.css'
})
export class RouterDdComponent {

}
