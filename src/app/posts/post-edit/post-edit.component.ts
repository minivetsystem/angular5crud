import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../../service/posts.service';
import {Post} from '../../models/posts.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostsService) {
  }

  editPostForm: FormGroup;

  ngOnInit() {
    const id = localStorage.getItem('postId');
    if (!id) {
      this.router.navigate(['list-user']);
      return;
    }
    this.editPostForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
    this.postService.findById(+id)
      .subscribe(data => {
        this.editPostForm.setValue(data);
      });

  }

  onSubmit() {
    this.postService.updatePost(this.editPostForm.value)
      .subscribe(data => {
        alert('Post updated');
        const postdata = <Post>data;
        const idx = this.postService.cachedPosts.findIndex(p => p.id === postdata.id);
        if (idx !== undefined) {
          this.postService.cachedPosts[idx].body = postdata.body;
          this.postService.cachedPosts[idx].title = postdata.title;
        }
        this.router.navigate(['list-post']);
      });
  }

}
