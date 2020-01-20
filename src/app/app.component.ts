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
  color: 'burlywood';
  posts: Posts[] = [];

  constructor(public dialog: MatDialog , public apiService: InstagramApiService) {
    this.apiService.getPosts().subscribe((recievedPosts) => {
      this.posts = recievedPosts;
    });
  }
  openComments(post: Posts) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '750px',
      height: '700px',
      data: { clickedPost: post}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log( 'Dialog closed' );
    });
  }

goDark(){
  document.body.style.backgroundColor = 'black';
  document.getElementsByClassName('dark')[0]["style"].background = 'grey';
  document.getElementsByName('srch')[0]["style"].background='grey';
  document.getElementsByName('srch')[0]["style"].borderWidth='2px';
  document.getElementsByName('srch')[0]["style"].borderColor='blueviolet';
  document.getElementsByClassName('comment')[0]["style"].background='grey';
  document.getElementsByClassName('comment')[1]["style"].background='grey';
}

goLight(){
  document.body.style.backgroundColor = 'white';
  document.getElementsByClassName('dark')[0]["style"].background = 'burlywood';
  document.getElementsByName('srch')[0]["style"].background = 'burlywood';
  document.getElementsByName('srch')[0]["style"].borderWidth ='1.15px';
  document.getElementsByName('srch')[0]["style"].borderColor='grey';
  document.getElementsByClassName('postovi')[0]["style"].background='white';


}

  ngInit(){}
}
