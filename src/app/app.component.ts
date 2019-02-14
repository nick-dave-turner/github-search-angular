import { Component, OnInit } from "@angular/core";

export interface IUser {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})

export class AppComponent implements OnInit {
  users: Array<IUser>;
  loading: boolean;
  error: boolean;

  ngOnInit(): void {
    this.users = [];
    this.loading = false;
    this.error = false;
  }

  onAddUsers = (users: Array<IUser>) => {
    this.users = users;
  };

  onDeleteUser = (id: number) => {
    this.users = this.users.filter(user => user.id !== id);
  };
}
