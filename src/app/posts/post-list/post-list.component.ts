import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PostsService} from '../../service/posts.service';
import {Post} from '../../models/posts.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private router: Router, private postService: PostsService) {
  }

  ngOnInit() {
    if (this.postService.cachedPosts.length <= 0) {
      this.postService.getPosts()
        .subscribe(data => {
          this.postService.cachedPosts = data;
          this.posts = this.postService.cachedPosts;
        });
    } else {
      this.posts = this.postService.cachedPosts;
    }
  }


  deletePost(post: Post): void {
    this.postService.deletePost(post.id)
      .subscribe(data => {
        this.posts = this.posts.filter(p => p !== post);
      });
  }

  editPost(post: Post): void {
    localStorage.removeItem('postId');
    localStorage.setItem('postId', post.id.toString());
    this.router.navigate(['edit-post']);
  }

  addPost(): void {
    this.router.navigate(['add-post']);
  }
}
