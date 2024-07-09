import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dices',
    loadChildren: () => import('./pages/dices/dices.module').then(m => m.DicesPageModule)
  },
  {
    path: 'generic-data/:type',
    loadChildren: () => import('./pages/generic-data/generic-data.module').then(m => m.GenericDataPageModule)
  },
  {
    path: 'quick-search',
    loadChildren: () => import('./pages/quick-search/quick-search.module').then(m => m.QuickSearchPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then(m => m.BooksPageModule)
  },
  {
    path: 'random-loot',
    loadChildren: () => import('./pages/random-loot/random-loot.module').then(m => m.RandomLootPageModule)
  },
  {
    path: 'auto-loot',
    loadChildren: () => import('./pages/auto-loot/auto-loot.module').then(m => m.AutoLootPageModule)
  },
  {
    path: 'diseases',
    loadChildren: () => import('./pages/diseases/diseases.module').then(m => m.DiseasesModule)
  },
  {
    path: 'merchant',
    loadChildren: () => import('./pages/merchant/merchant.module').then(m => m.MerchantModule)
  },
  {
    path: 'mob-leveling',
    loadChildren: () => import('./pages/mob-leveling/mob-leveling.module').then(m => m.MobLevelingModule)
  },
  {
    path: 'bestiary',
    loadChildren: () => import('./pages/bestiary/bestiary.module').then(m => m.BestiaryModule)
  },
  {
    path: 'character-sheet',
    loadChildren: () => import('./pages/character-sheet/character-sheet.module').then(m => m.CharacterSheetModule)
  },
  {
    path: 'perks',
    loadChildren: () => import('./pages/perks/perks.module').then(m => m.PerksModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
