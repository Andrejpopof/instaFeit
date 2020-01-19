import { Component } from '@angular/core';
import { Posts } from './classes';
import { InstagramApiService } from './instagram-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-proekt';
  
  posts: Posts[] = [];

  constructor(public apiService: InstagramApiService) {
    this.apiService.getPosts().subscribe((recievedPosts) => {
      this.posts = recievedPosts;
    });
  }

  ngInit(){}

  
}
