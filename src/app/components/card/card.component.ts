import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../../app.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: []
})

export class CardComponent {
  @Input() user: IUser;
  @Output() emitDeleteUser = new EventEmitter<number>();
}
