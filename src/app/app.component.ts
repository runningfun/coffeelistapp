import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coffee list app works!';
  users = USERS;
  selectedUser: UserComponent;
  user: UserComponent = {
    id: 1,
    name: 'Stefan'
  }
  user2: UserComponent = {
    id: 2,
    name: 'Stefan2'
  }

  onSelect(user: UserComponent): void {
    this.selectedUser = user;
  }
}

const USERS: UserComponent[]=[
  {id:1, name: 'test'},
  {id:2, name: 'bla'}
];
