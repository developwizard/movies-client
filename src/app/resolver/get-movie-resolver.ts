import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Movie} from "../model/models";
import {MoviesService} from "../service/movies.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetMovieResolver implements Resolve<Movie> {

  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> | Promise<Movie> | Movie {
    return this.movieService.getMovieByImdbId(route.params['imdbId']);
  }
}
