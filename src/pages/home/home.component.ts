import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('homeVideo') homeVideo: ElementRef;
  public isLoaded = false;
  public video_element: any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
      setTimeout(() => {
        this.playVideo();
      }, 2000);
    }, 1000);
  }

  playVideo() {
    this.homeVideo.nativeElement.muted = true;
    this.homeVideo.nativeElement.loop = true;
    this.homeVideo.nativeElement.volume = 0;
    this.homeVideo.nativeElement.play();
  }

  scrollIcon(className: string) {
    const elementList = document.querySelectorAll(`.${className}`);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }

}
