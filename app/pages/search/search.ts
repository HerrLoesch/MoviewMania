import { Component } from '@angular/core';
import { Movies } from '../../providers/movies/movies';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [Movies]
})
export class SearchPage {

    public movies: any;

    public searchText: string;

    public onSearchInput() {
      this.search(this.searchText);
    }

  constructor(private movieRepository: Movies) {
  }

  private search(text: string){
        this.movieRepository.search(text)
      .then(data => {
        this.movies = data;
        console.log(data);
      })
      .catch(error => console.log(error));  
  }
}
