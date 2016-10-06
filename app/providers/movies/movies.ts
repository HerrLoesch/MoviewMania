import { Injectable } from '@angular/core';
import {sum} from 'lodash';
import 'rxjs/add/operator/map';

/*
  Generated class for the Movies provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Movies {

  constructor() {}

  public search(searchText: string) {

      let data = new Array();

      let movie = new Movie();
      movie.Title = "olo";

      data.push(movie);

      return data;
  }

}

export class Movie {
  public Title : string;
  public Year : number;
  public imdbID: string;
  public Type: string;
  public Poster: string;
}

