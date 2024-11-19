import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {CharacterSheetRoutingModule} from "./character-sheet-routing.module";
import {CharacterSheetListComponent} from "./character-sheet-list/character-sheet-list.component";
import {CharacterSheetShowComponent} from "./character-sheet-show/character-sheet-show.component";
import { CharacterSheetResistance } from './character-sheet-show/character-sheet-resistance/character-sheet-resistance.component';


@NgModule({
  declarations: [CharacterSheetListComponent, CharacterSheetShowComponent, CharacterSheetResistance],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CharacterSheetRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ]
})
export class CharacterSheetModule {
}
