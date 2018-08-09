import { Post } from './../../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public lat: number;
  public lng: number;
  public selectedPost: number;
  public cardContent: Post;
  public isLoaded = false;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private _postService: PostService) { }

  ngOnInit() {
    this.selectedPost =  this.actRoute.params['value'].id;
    this._postService.getSinglePost(this.selectedPost).subscribe((res: Post) => {
      this.cardContent = res;
      this.lat = this.cardContent.lat;
      this.lng = this.cardContent.long;
      this.isLoaded = true;
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goBack() {
    this.router.navigate(['/posts']);
  }

}
