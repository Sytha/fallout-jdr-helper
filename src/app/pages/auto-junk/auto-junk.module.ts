import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AutoJunkPageRoutingModule} from './auto-junk-routing.module';

import {AutoJunkPage} from './auto-junk.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoJunkPageRoutingModule,
    SharedModule
  ],
  declarations: [AutoJunkPage]
})
export class AutoJunkPageModule {
}
