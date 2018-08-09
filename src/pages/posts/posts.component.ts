import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../../models/post.model';
import { Router } from '../../../node_modules/@angular/router';
import { BsModalRef, BsModalService } from '../../../node_modules/ngx-bootstrap';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: [{}] = [{}];
  public empyPost: Post;
  public isLoaded = false;
  public isNewPost = true;
  constructor(
    private _postsService: PostsService,
    private router: Router,
    public bsModalRef: BsModalRef,
    public _modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.loadPostList();
  }

  private loadPostList() {
    this._postsService.getPostsList().subscribe(
      (posts: [Post]) => {
        this.posts = posts;
        this.isLoaded = true;
      },
      err => console.error('Error gathering the post list', err)
    );
  }

  private createNewPost(post: Post) {
    this._postsService.createPost(post)
      .subscribe(
        postCreated => {
          this.reloadContent();
        },
        error => {
          console.error('Error creating post', error);
        }
      );
  }

  private reloadContent() {
    this.loadPostList();
  }

  public createPost() {
    const initialState = {
      initialState: {
        modalTitle: 'Create post',
        method: (post) => this.createNewPost(post),
        condition: this.isNewPost
      }
    };
    this.bsModalRef = this._modalService.show(ModalComponent, {initialState});
  }

  public goHome() {
    this.router.navigate(['/home']);
  }


}
