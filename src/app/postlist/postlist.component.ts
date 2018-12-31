import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
	// @Input() title: string;
	// @Input() content: string;
	@Input() monPost: Post;

  constructor() { }

  ngOnInit() { }

}
