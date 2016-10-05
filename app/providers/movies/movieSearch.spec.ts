import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {Movies} from './movies';
 
describe('movie search', () => {
 
    beforeEachProviders(() => [Movies]);

    it('should return an array of movies for the search text lo', inject([Movies], (movieRepository) =>{
 
        var movies = movieRepository.search("lo");

        expect(Array.isArray(movies)).toBeTruthy;
        expect(movies.length).toBeGreaterThan(0);
    }));
});