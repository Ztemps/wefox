import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('homeVideo') homeVideo: ElementRef;
  public isLoaded = false;
  public video_element: any;
  public loader;
  public done;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
      setTimeout(() => {
        this.playVideo();
      }, 100);
    }, 100);
  }

  playVideo() {
    this.homeVideo.nativeElement.muted = true;
    this.homeVideo.nativeElement.loop = true;
    this.homeVideo.nativeElement.volume = 0;
    this.homeVideo.nativeElement.play();
  }

 goToPostsList() {
  this.router.navigate(['/posts']);
}

}
