import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../../service/posts.service';
import {Post} from '../../models/posts.model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  constructor(private router: Router, private postService: PostsService, private formBuilder: FormBuilder) {
  }

  addPostForm: FormGroup;

  ngOnInit() {

    this.addPostForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

  }

  onSubmit() {
    this.postService.createPost(this.addPostForm.value)
      .subscribe(data => {
        alert('Post created');
        this.postService.cachedPosts.push(<Post>data);
        this.router.navigate(['list-post']);
      });
  }

}
