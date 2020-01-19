import { DialogComponent } from './dialog/dialog.component';
import { Component } from '@angular/core';
import { Posts } from './classes';
import { InstagramApiService } from './instagram-api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-proekt';
  posts: Posts[] = [];

  constructor(public dialog: MatDialog , public apiService: InstagramApiService) {
    this.apiService.getPosts().subscribe((recievedPosts) => {
      this.posts = recievedPosts;
    });
  }
  openComments() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '750px',
      height: '700px',
      data: { clickedPost: this.posts}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log( 'Dialog closed' );
    });
  }

  ngInit(){}
}
