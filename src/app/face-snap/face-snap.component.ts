import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  buttonText!: string

  constructor(private faceSnapService: FaceSnapService,
              private router: Router) {}
  ngOnInit() {
    this.buttonText = 'Oh snap'
  }

  onSnap(){
    if (this.buttonText === 'Oh snap'){
      this.faceSnapService.snapFaceById(this.faceSnap.id)
      this.buttonText = 'Oups, unsnaps!';
    }else{
      this.faceSnap.snaps--;
      this.buttonText= 'Oh snap'
    }
  }
  OnViewFaceSnap():void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
