import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { PostService } from './post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public selectedPost: number;
  public isLoaded = false;

  constructor(
    private actRoute: ActivatedRoute,
    private _postService: PostService,
    private router: Router) { }

  ngOnInit() {
    console.log('this.actRoute.params: ', this.actRoute.params['value'].id);
    this.selectedPost =  this.actRoute.params['value'].id;
    this._postService.getSinglePost(this.selectedPost).subscribe((res: Post) => {
      console.log('res: ', res);
      this.isLoaded = true;
    });
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

}
