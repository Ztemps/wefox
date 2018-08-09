import { API_URL } from './../../../constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../../../models/post.model';

@Injectable()
export class PostService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getSinglePost(id: number) {
    return this.http
      .get(`${API_URL}/${id}`)
      .pipe(map((post: any) => new Post(post)));
  }

}
