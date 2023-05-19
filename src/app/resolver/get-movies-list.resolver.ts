import {Injectable} from "@angular/core";
import {Movie} from "../model/models";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {MoviesService} from "../service/movies.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesResolver implements Resolve<Movie[]> {

  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> | Promise<Movie[]> | Movie[]  {
    return this.movieService.getMovieList();
  }
}
