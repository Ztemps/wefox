import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private _postsService: PostsService) { }

  public posts: [{}] = [{}];

  ngOnInit() {
    this.loadPostList();
  }

  private loadPostList() {
    this._postsService.getPostsList().subscribe(
      (posts: [Post]) => {
        this.posts = posts;
        console.log('this.posts: ', this.posts);
      },
      err => console.error('Error gathering the post list', err)
    );
  }
}
