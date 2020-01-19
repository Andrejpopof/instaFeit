import { Component, OnInit, Inject } from '@angular/core';
import { shareOptions } from '../classes';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
}

@Component({
  selector: 'app-share-options',
  templateUrl: './share-options.component.html',
  styleUrls: ['./share-options.component.css']
})
export class ShareOptionsComponent implements OnInit {

  shareOptions: shareOptions[] = [];

  constructor(
    public dialogRef: MatDialogRef<ShareOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.shareOptions=[
        {destination: "Share to Facebook!", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Facebook_f_logo_2013.png"},
        {destination: "Share to Twitter!", image:"https://www.pikpng.com/pngl/m/17-170048_download-red-logo-png-twitter-logo-red-png.png"}
      ];
    }

  ngOnInit() {
  }

}
