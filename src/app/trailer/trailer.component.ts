import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {YouTubePlayer, YouTubePlayerModule} from "@angular/youtube-player";
import {ActivatedRoute, Data} from "@angular/router";
import {Movie} from "../model/models";

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
  standalone: true,
  imports: [YouTubePlayerModule]
})
export class TrailerComponent implements OnInit, AfterViewInit {
  private apiLoaded = false;
  @ViewChild('videoPlayer', {static: true})
  youtubePlayer!: YouTubePlayer;
  movie: Movie = <Movie> {}

  constructor(private hostElement: ElementRef,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movie = data['movie'];
      const trailerLink = this.movie.trailerLink.split('/watch?v=');
      this.youtubePlayer.videoId = trailerLink[trailerLink.length - 1];
      if (!this.apiLoaded) {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }
    });
  }

  ngAfterViewInit(): void {
    const hostEl = getComputedStyle(this.hostElement.nativeElement);
    const hostHeight: number = +hostEl.height.split("px")[0];
    const hostWidth: any = hostEl.width.split("px")[0];
    this.youtubePlayer.height = hostHeight * 0.9;
    this.youtubePlayer.width =  hostWidth * 0.9;
  }
}
