import {Component} from '@angular/core';
import { PostService } from '../data/post.services';
import { Post } from '../data/post';
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list-component.html',
    styleUrls : ['./post-list-component.css']
})
export class PostListComponent{
    posts : Post[] = [];
    constructor(private postService : PostService) {}

    ngOinit(): void{
        this.loadPosts();

    }

    loadPosts(): void {
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}