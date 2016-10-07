import { Component, OnInit } from '@angular/core';
import { Movies } from '../../providers/movies/movies';

@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [Movies]
})
export class DetailsPage implements OnInit{

  public movie: any = {};

  constructor(private movieRepository: Movies) { }

  ngOnInit() { this.setMovie("tt1047490"); }

    private setMovie(imdbId: string){
        this.movieRepository.getMovie(imdbId)
          .then(data => {
            this.movie = data;
            console.log(data);
        })
      .catch(error => console.log(error));  
  }
}
