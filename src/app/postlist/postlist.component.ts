import { Component, Input, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  selectedPost: Post;
  posts =  POSTS;
  constructor() { }

  ngOnInit() { }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  onLoveIt(post: Post): void {
    post.loveIts += 1;
  }

  onDontLoveIt(post: Post): void {
    post.loveIts -= 1;
  }
}
