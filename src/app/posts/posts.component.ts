import { Component, OnInit, Input } from '@angular/core';
import { Posts, Comments } from '../classes';
import { stringify } from 'querystring';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public dialog: MatDialog

  @Input()
    posts: Posts;
    komentari: Comments;


  constructor() { }

  ngOnInit() {
    this.posts.numberLikes=260;
  }


  reset(){
    this.posts.flagLiked = false;
  }
 
  onLike(){
    if (!this.posts.liked) {
      this.posts.numberLikes += 1;
      this.posts.liked = true;
      this.posts.flagLiked = true;
      this.reset();
    } 
    else {
      this.posts.flagLiked = true;
      this.reset();
    }
  }

  /**addComment(kom: any){
    this.komentari.comment=kom;
    this.komentari.username="Default";
    this.posts.comments.push(this.komentari);
  }

  onClickSubmit(userInput) {
    var comm: string[];
    comm = userInput.comment.split(" ");
    this.addComment(userInput.comment);
    }**/

    onClickShare(){
       prompt("Share to:");
  }

}
