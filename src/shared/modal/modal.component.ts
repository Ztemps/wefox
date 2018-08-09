import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { BsModalRef } from '../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public post: Post;
  public modalTitle: string;
  public isLoaded = false;
  public method: any;
  public empyPost;
  public condition;
  public originalPost: Post;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // Avoid async errors
    setTimeout(() => {
      this.isLoaded = true;
      this.modalTitle = this.bsModalRef.content.initialState.modalTitle;
      if (this.bsModalRef.content.initialState.condition) {
        this.post = new Post({ title: '', content: ''});
      } else {
        this.originalPost = this.bsModalRef.content.initialState.post;
        this.post = new Post (this.originalPost);
      }
    }, 300);
  }

  onSubmit() {
    this.bsModalRef.content.initialState.method(this.post);
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }
}
