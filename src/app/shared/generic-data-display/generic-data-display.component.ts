import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModsDisplayModalComponent} from "../mods-display-modal/mods-display-modal.component";
import {DataId, DataTableDefinition} from "../../data/generic-data-lang";
import {TranslateService} from "@ngx-translate/core";
import {RECIPE_DEF, RECIPES} from "../../data/recipes/recipes-lang";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-generic-data-display',
  templateUrl: './generic-data-display.component.html',
  styleUrls: ['./generic-data-display.component.scss'],
})
export class GenericDataDisplayComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private translate: TranslateService, private languageService: LanguageService) {
  }

  ngOnInit() {
    if (this.displayRecipe) {
      this.genericItems.forEach(value => {
        const itemName = value['Name'];
        const matchingRecipe = this.findMatchingRecipe(itemName);
        if (matchingRecipe != null) {
          this.matchingRecipes[itemName] = [matchingRecipe];
        }
      });
    }
  }

  @Input() genericItems: any[];

  @Input() dataId: DataId;
  @Input() displayRecipe: boolean = false;
  @Input() displayTitle: boolean = true;

  matchingRecipes: { [key: string]: any[] } = {};

  async openModModal(itemName) {
    const modal = await this.modalCtrl.create({
      component: ModsDisplayModalComponent,
      componentProps: {itemName: itemName, itemType: this.dataId.type}
    });
    await modal.present();
    await modal.onWillDismiss();
  }

  isOptional(column: DataTableDefinition, value: string) {
    return value && column.column.startsWith("Effect") && value === '';
  }

  getComponents(complexity: number, extraOnTorso: boolean): string {
    const suffix = extraOnTorso ? (' (+1 ' + this.translate.instant('JUNK.UNCOMMON') + ' ' + this.translate.instant('JUNK.TORSO') + ')') : '';
    switch (complexity) {
      case 1:
        return this.translate.instant('JUNK.COMMON') + ' X2' + suffix;
      case 2:
        return this.translate.instant('JUNK.COMMON') + ' X3' + suffix;
      case 3:
        return this.translate.instant('JUNK.COMMON') + ' X4, ' + this.translate.instant('JUNK.UNCOMMON') + ' X2' + suffix;
      case 4:
        return this.translate.instant('JUNK.COMMON') + ' X5, ' + this.translate.instant('JUNK.UNCOMMON') + ' X3' + suffix;
      case 5:
        return this.translate.instant('JUNK.COMMON') + ' X6, ' + this.translate.instant('JUNK.UNCOMMON') + ' X4, ' + this.translate.instant('JUNK.RARE') + ' X2' + suffix;
      case 6:
        return this.translate.instant('JUNK.COMMON') + ' X7, ' + this.translate.instant('JUNK.UNCOMMON') + ' X5, ' + this.translate.instant('JUNK.RARE') + ' X3' + suffix;
      case 7:
        return this.translate.instant('JUNK.COMMON') + ' X8, ' + this.translate.instant('JUNK.UNCOMMON') + ' X6, ' + this.translate.instant('JUNK.RARE') + ' X4' + suffix;
    }
  }

  private findMatchingRecipe(itemName: any) {
    let matchingRecipe: any = null;
    RECIPES.forEach(recipeType => {
      const candidatesRecipes = recipeType[this.languageService.getCurrentLanguage()];
      for (let candidatesRecipe of candidatesRecipes) {
        if (candidatesRecipe['Name'].toLowerCase().endsWith(itemName.toLowerCase())) {
          matchingRecipe = candidatesRecipe;
          break;
        }
      }
    });
    return matchingRecipe;
  }

  getRecipeDataId(): DataId {
    return {
      definition: RECIPE_DEF[this.languageService.getCurrentLanguage()],
      moddable: false,
      data: [],
      type: 'Recipe',
      icon: '',
      label: '',
      generic: true
    };
  }
}
