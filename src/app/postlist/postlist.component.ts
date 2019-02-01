import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {
  title = 'Activité d\'Angular pour OpenClassrooms';

  selectedPost: Post;
  // posts =  POSTS;
  posts: Post[];
  postsSubcription: Subscription;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubcription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  onLoveIt(post: Post): void {
    post.loveIts += 1;
  }

  onDontLoveIt(post: Post): void {
    post.loveIts -= 1;
  }

  onDeletePost(post: Post): void {
    this.postsService.deletePost(post);
  }

  ngOnDestroy(): void {
    this.postsSubcription.unsubscribe();
  }
}
