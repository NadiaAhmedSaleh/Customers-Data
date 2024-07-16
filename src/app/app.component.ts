import { Component } from '@angular/core';
import * as usersData from '../assets/db.json';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route';
  
}
