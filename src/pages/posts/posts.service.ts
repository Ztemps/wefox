import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../constants';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPostsList() {
    return this.http.get(API_URL).pipe(
      map((posts: [Post]) => {
        const postList = [];
        posts.forEach((post: Post) => {
          postList.push(new Post(post));
        });
        return postList;
      })
    );
  }
}
