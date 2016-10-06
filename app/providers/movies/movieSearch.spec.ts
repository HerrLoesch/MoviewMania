import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {Movies} from './movies';
import {some, includes, find} from 'lodash';
 
describe('movie search', () => {
 
    beforeEachProviders(() => [Movies]);

    it('should return an array of movies for the search text lo', inject([Movies], (movieRepository) =>{
 
        var movies = movieRepository.search("lo");

        expect(Array.isArray(movies)).toBeTruthy;
        expect(movies.length).toBeGreaterThan(0);
    }));

    it('should return movies which titles contain the text lo', inject([Movies], (movieRepository) => {

        var movies = movieRepository.search("lo");
        
        var foundSearchPhrase = find(movies, function(movie) {

            var missmatchFound = !includes(movie.Title, 'lo');
            return missmatchFound;
        });

        expect(movies.length).toBeGreaterThan(0);
        expect(foundSearchPhrase).toBeFalsy("Found at least one element which does not contain lo.");
    }));
});