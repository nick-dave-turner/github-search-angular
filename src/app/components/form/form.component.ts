import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../../app.component";

interface ISearchResults {
  items: Array<IUser>;
}

const URL = "https://api.github.com/search/users?per_page=42&page=1&q=";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: []
})

export class FormComponent implements OnInit {
  constructor(private http: HttpClient) { }
  @Input() loading: boolean;
  @Input() error: boolean;
  @Output() emitAddUsers = new EventEmitter<Array<IUser>>();
  @Output() emitLoading = new EventEmitter<boolean>();
  @Output() emitError = new EventEmitter<boolean>();

  searchTerm;

  ngOnInit(): void {
    this.searchTerm = "";
  }

  onSubmit(): void {
    if (!this.searchTerm) { return; }

    this.emitLoading.emit(true);

    this.http.get(`${URL}${this.searchTerm}`)
      .subscribe(
        (data: ISearchResults) => {
          this.emitAddUsers.emit(data.items);
          this.emitLoading.emit(false);
          this.searchTerm = "";
        },
        () => this.emitError.emit(true)
      );
  }
}
