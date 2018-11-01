import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/posts.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  apiUrl: string = 'https://my-json-server.typicode.com/minivetsystem/ng5crud/posts';

  cachedPosts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }

  findById(id: number) {
    return this.http.get<Post>(this.apiUrl + '/' + id);
  }

  createPost(post: Post) {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(post: Post) {
    return this.http.put(this.apiUrl + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
