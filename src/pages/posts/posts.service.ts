import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../constants';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Listed as CRUD order
  createPost(post: Post) {
    return this.http.post(API_URL, { post }, { headers: this.headers });
  }

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

  updatePost(post: Post) {
    return this.http.put(
      `${API_URL}/${post.id}`, { post }, { headers: this.headers }
    );
  }

  removePost(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
}
}
