import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PerksPageRoutingModule} from './perks-routing.module';

import {PerksPage} from './perks.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerksPageRoutingModule,
    SharedModule
  ],
  declarations: [PerksPage]
})
export class PerksModule {
}
