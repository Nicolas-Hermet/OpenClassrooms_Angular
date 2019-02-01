import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})

export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postsService: PostsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    console.log(title);
    const content = this.postForm.get('content').value;
    console.log(content);
    const loveIts = 0;
    const createdAt = Date.now();
    const newPost = new Post(title, content);
    console.log(newPost);
    newPost.loveIts = loveIts;
    newPost.createdAt = createdAt;
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
