import { Component, Input, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  monPost = 314;
  posts =  POSTS;
  constructor() { }

  ngOnInit() { }

}
