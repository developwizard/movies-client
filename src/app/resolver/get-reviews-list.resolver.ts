import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Review} from "../model/models";
import {ReviewService} from "../service/review.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetReviewsListResolver implements Resolve<Review[]> {

  constructor(private reviewService: ReviewService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Review[]> | Promise<Review[]> | Review[] {
    return this.reviewService.getReviews(route.params['imdbId']);
  }
}
