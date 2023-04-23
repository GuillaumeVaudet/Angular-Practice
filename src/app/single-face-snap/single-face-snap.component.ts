import {Component} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.buttonText = 'Oh snap'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
}
