import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { POSTS } from '../models/mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref(`/posts`).on('value', (data) => {
      if (this.posts = data.val()) {
        data.val();
      } // else {
      //   this.posts = POSTS;
      //   this.savePosts();
      // }
      this.emitPosts();
    });
  }

  deletePost(post: Post) {
    const postIndexToDelete = this.posts.findIndex(
      (postConcerned) => {
        if (postConcerned === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToDelete, 1);
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

}
