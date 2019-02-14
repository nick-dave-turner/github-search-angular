import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../../app.component";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: []
})

export class CardListComponent {
  @Input() users: Array<IUser>;
  @Input() loading: boolean;
  @Input() error: boolean;
  @Output() emitDeleteUser = new EventEmitter<number>();
}
