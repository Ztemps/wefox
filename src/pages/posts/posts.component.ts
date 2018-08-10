import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../../models/post.model';
import { Router } from '../../../node_modules/@angular/router';
import { BsModalRef, BsModalService } from '../../../node_modules/ngx-bootstrap';
import { ModalComponent } from '../../shared/modal/modal.component';
declare var swal: any;

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
  public loader;
  public done;
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
          swal({
            title: 'Well Done!',
            text: 'Post successfully created',
            icon: 'success',
            button: 'Accept'
          });
        },
        error => {
          console.error('Error creating post', error);
          swal ( 'Oops', 'Something went wrong!', 'error' );
        }
      );
  }

  private updatePost(post: Post) {
    this._postsService.updatePost(post)
      .subscribe(
        postEdited => {
          this.reloadContent();
          swal({
            title: 'Well Done!',
            text: 'Post successfully updated',
            icon: 'success',
            button: 'Accept'
          });
        },
        error => {
          console.error('Error updating post', error);
          swal ( 'Oops', 'Something went wrong!', 'error' );
        }
      );
  }
  private reloadContent() {
    this.loadPostList();
  }
  private showModal(initialState) {
    this.bsModalRef = this._modalService.show(ModalComponent, {initialState});
  }

  public createPost() {
    this.isNewPost = true;
    const initialState = {
      initialState: {
        modalTitle: 'Create post',
        method: (post) => this.createNewPost(post),
        condition: this.isNewPost
      }
    };
    this.showModal(initialState);
  }

  public editPost(originalPost: Post) {
    this.isNewPost = false;
    const initialState = {
      initialState: {
        modalTitle: 'Edit post',
        // tslint:disable-next-line:no-shadowed-variable
        method: (editedPost) => this.updatePost(editedPost),
        condition: this.isNewPost,
        post: originalPost
      }
    };
    this.showModal(initialState);
  }

  public removePost(post: Post) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this post!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._postsService.removePost(post.id)
        .subscribe(
          postDeleted =>  {
            swal('Success! Your post has been deleted!', {
              icon: 'success',
            });
            this.reloadContent();
          },
          error => {
            console.error('Error deleting post', error);
            swal ( 'Oops' ,  'Something went wrong!' ,  'error' );
          }
        );
      } else {
        swal('Take care the next time!');
      }
    });
  }

  openSinglePost(post) {
    this.router.navigate(['/posts', post.id]);
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

}
