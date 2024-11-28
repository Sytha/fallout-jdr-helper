import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PerksPage} from './perks.page';

const routes: Routes = [
  {
    path: '',
    component: PerksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerksPageRoutingModule {
}
