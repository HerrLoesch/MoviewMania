import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {MovieRepository} from './movieRepository';
 
describe('movie search', () => {
 
    beforeEachProviders(() => [MovieRepository]);

    it('should return an array of movies for the search text lo', inject([MovieRepository], (movieRepository) =>{
 
        var movies = movieRepository.search("lo");

        expect(Array.isArray(movies)).toBeTruthy;
        expect(movies.length).toBeGreaterThan(0);
    }));
});