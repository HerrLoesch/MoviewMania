import { Component,  } from '@angular/core';
import { Movies } from '../../providers/movies/movies';
import { Http } from '@angular/http';
import { NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { FavoriteInputPage } from '../favorite-input/favorite-input';


@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [Movies]
})
export class SearchPage {

  public showDetails(imdbID: string) {
    this.navCtrl.push(DetailsPage, { "id": imdbID});
  }

  constructor(private movieRepository: Movies, private navCtrl: NavController, private modalCtrl: ModalController) {
  }


    public movies: any;

    public searchText: string;


    public onSearchInput() {
      this.search(this.searchText);
    }

  private search(text: string){
        this.movieRepository.search(text)
        .then(data => {
        this.movies = data;
        console.log(data);
      })
      .catch(error => console.log(error));  
  }

  private addFavorite(imdbID : string) {

    let modal = modalCtrl.create(FavoriteInputPage);
    this.navCtrl.present(modal);
  }
}
