export class Post {
	title: string;
	content: string;
	liveIts: number;
	createdAt: Date;
	constructor(){
		this.title = '';
		this.content = '';
		this.liveIts = 0;
		this.createdAt = new Date();
	}

	// setTitle(title){
	// 	this.title = title;
	// }

	// setTitle(content){
	// 	this.content = content;
	// }
}
