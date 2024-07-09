import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharacterSheetListComponent} from "./character-sheet-list/character-sheet-list.component";
import {CharacterSheetShowComponent} from "./character-sheet-show/character-sheet-show.component";

const routes: Routes = [
  {
    path: 'show/:id',
    component: CharacterSheetShowComponent,
  },
  {
    path: '',
    component: CharacterSheetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterSheetRoutingModule {
}
