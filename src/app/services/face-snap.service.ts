import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
  }
)
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Guigui',
      description: 'description de guigui',
      imageUrl: 'https://images.unsplash.com/photo-1681983137356-d8b2bae77153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      createdDate: new Date,
      snaps: 0,
      location: 'Dublin'
    },
    {
      id: 2,
      title: 'Jojo',
      description: 'Amie de Guigui',
      imageUrl: 'https://images.unsplash.com/photo-1681860317375-fdcc92563f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      createdDate: new Date,
      snaps: 10
    },
    {
      id: 3,
      title: 'meuhmeuh',
      description: 'animal de compagnie trop mignon',
      imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80',
      createdDate: new Date,
      snaps: 58
    },
    {
      id: 4,
      title: 'Guigui',
      description: 'description de guigui',
      imageUrl: 'https://images.unsplash.com/photo-1681983137356-d8b2bae77153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      createdDate: new Date,
      snaps: 0,
      location: 'Dublin'
    },
    {
      id: 5,
      title: 'Jojo',
      description: 'Amie de Guigui',
      imageUrl: 'https://images.unsplash.com/photo-1681860317375-fdcc92563f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      createdDate: new Date,
      snaps: 10
    },
    {
      id: 6,
      title: 'meuhmeuh',
      description: 'animal de compagnie trop mignon',
      imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80',
      createdDate: new Date,
      snaps: 58
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('facesnap not found')
    }else{
      return faceSnap
    }

  }
  snapFaceById(faceSnapId: number){
    const faceSnap = this.getFaceSnapById(faceSnapId);
  }
}
