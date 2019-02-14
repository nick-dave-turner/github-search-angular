import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CardComponent } from "./card/card.component";
import { CardListComponent } from "./card-list/card-list.component";
import { FormComponent } from "./form/form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CardComponent,
    CardListComponent,
    FormComponent
  ],
  exports: [
    CardComponent,
    CardListComponent,
    FormComponent
  ]
})

export class ComponentsModule {}
