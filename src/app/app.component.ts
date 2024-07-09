import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./shared/language.service";
import {DataId, REGISTERED_DATA_SECTIONS, Section} from "./data/generic-data-lang";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sections: Section[] = [];
  public currentLanguage = 'fr';

  constructor(private platform: Platform, private translate: TranslateService, private languageService: LanguageService) {
    if (this.translate.getBrowserLang() === 'fr' || this.translate.getBrowserLang() === 'it') {
      this.currentLanguage = this.translate.getBrowserLang();
    }
    translate.setDefaultLang(this.currentLanguage);
    translate.use(this.currentLanguage);
    this.languageService.updateLanguage(this.currentLanguage);
  }

  ngOnInit() {
    this.translate.get('APP.TITLE').subscribe(() => {
      this.buildNavigation();
      this.initializeApp();
    });
    this.languageService.getLanguage().subscribe(lang => {
      this.translate.use(this.currentLanguage).subscribe(() => {
        this.buildNavigation();
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }

  private buildMenu(labelKey, type, icon): DataId {
    return {
      label: this.translate.instant('APP.MENU.' + labelKey),
      type: type,
      icon: icon,
      data: [],
      definition: [],
      generic: false,
      moddable: false
    }
  }

  private buildNavigation() {
    this.sections = [];
    this.sections.push({
      label: this.translate.instant('APP.SECTIONS.MAIN'),
      data: [
        this.buildMenu('HOME', 'home', 'home'),
        this.buildMenu('DICE', 'dices', 'dice'),
        this.buildMenu('QUICKSEARCH', 'quick-search', 'search'),
        this.buildMenu('RANDOMBOOKS', 'books', 'book'),
        this.buildMenu('RANDOMLOOT', 'random-loot', 'shuffle'),
        this.buildMenu('AUTOLOOT', 'auto-loot', 'bag-handle'),
        this.buildMenu('PERKS', 'perks', 'bulb'),
        this.buildMenu('MERCHANT', 'merchant', 'cash'),
        this.buildMenu('DISEASES', 'diseases', 'medical'),
        this.buildMenu('CHARACTERSHEET', 'character-sheet', 'man'),
      ]
    });
    this.sections.push({
      label: this.translate.instant('APP.SECTIONS.BESTIARY'),
      data: [
        this.buildMenu('BESTIARYUPGRADE', 'mob-leveling', 'ribbon'),
        this.buildMenu('BESTIARYLIST', 'bestiary', 'paw'),
      ]
    });
    this.sections = [...this.sections, ...REGISTERED_DATA_SECTIONS[this.currentLanguage]];
  }

  changeLanguage(event) {
    this.currentLanguage = event.detail.value;
    this.languageService.updateLanguage(this.currentLanguage);
  }
}
