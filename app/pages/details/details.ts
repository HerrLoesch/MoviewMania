import { Component, OnInit } from '@angular/core';
import { Movies } from '../../providers/movies/movies';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [Movies]
})
export class DetailsPage implements OnInit{

  public movie: any = {};

  constructor(private movieRepository: Movies, private params: NavParams) { 
    
  }

  ngOnInit() 
  { 
    this.setMovie(this.params.get("id")); 
  }

    private setMovie(imdbId: string){
        this.movieRepository.getMovie(imdbId)
          .then(data => {
            this.movie = data;
            console.log(data);
        })
      .catch(error => console.log(error));  
  }
}
