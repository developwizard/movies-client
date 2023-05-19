import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Review} from "../model/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8080/api/v1/reviews';

  constructor(private http: HttpClient) {
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.baseUrl, review);
  }

  getReviews(imdbId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/${imdbId}`);
  }
}
