import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {CharacterSheetRoutingModule} from "./character-sheet-routing.module";
import {CharacterSheetListComponent} from "./character-sheet-list/character-sheet-list.component";
import {CharacterSheetShowComponent} from "./character-sheet-show/character-sheet-show.component";


@NgModule({
  declarations: [CharacterSheetListComponent, CharacterSheetShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterSheetRoutingModule,
    SharedModule
  ]
})
export class CharacterSheetModule {
}
