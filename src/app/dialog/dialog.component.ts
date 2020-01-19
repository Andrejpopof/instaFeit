import { Comments,Posts } from './../classes';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { InstagramApiService } from '../instagram-api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input()
  komentari: Comments;
  posts: Posts;
   constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit() {
  }

}
