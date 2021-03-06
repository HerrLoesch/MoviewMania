import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class Movies {

  constructor(private http: Http) {}

  public search(searchText: string) {
       

      return new Promise(resolve => {
        let url = 'http://www.omdbapi.com/?s=' + searchText;
        console.log('start searching:' + url);

        this.http.get(url)
                 .map(result => result.json())
                 .subscribe(data => resolve(data.Search));
      });
  }

  public getMovie(imdbID: string) {

      return new Promise(resolve => {
        let url = 'http://www.omdbapi.com/?i=' + imdbID;
        console.log('start getting movie:' + url);

        this.http.get(url)
                 .map(result => result.json())
                 .subscribe(data => resolve(data));
      });
  }
}

export class Movie {
  public Title : string;
  public Year : number;
  public imdbID: string;
  public Type: string;
  public Poster: string;
  
}

