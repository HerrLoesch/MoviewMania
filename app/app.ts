import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SearchPage } from './pages/Search/Search';
import { FavoritesPage } from './pages/favorites/favorites';
import { AboutPage } from './pages/about/about';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

    searchRoot = SearchPage;
    favoritesRoot = FavoritesPage;
    aboutRoot = AboutPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
