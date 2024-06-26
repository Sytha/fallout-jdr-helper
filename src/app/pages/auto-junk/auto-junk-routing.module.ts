import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AutoJunkPage} from './auto-junk.page';

const routes: Routes = [
  {
    path: '',
    component: AutoJunkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoJunkPageRoutingModule {
}
