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
  constructor(
    private _postsService: PostsService,
    private router: Router,
    public bsModalRef: BsModalRef,
    private _modalService: BsModalService,
  ) { }

  public posts: [{}] = [{}];
  public isLoaded = false;

  ngOnInit() {
    this.loadPostList();
  }

  private loadPostList() {
    this._postsService.getPostsList().subscribe(
      (posts: [Post]) => {
        this.posts = posts;
        console.log('this.posts: ', this.posts);
        this.isLoaded = true;
      },
      err => console.error('Error gathering the post list', err)
    );
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

  createPost() {
    const initialState = {};
    this.bsModalRef = this._modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
