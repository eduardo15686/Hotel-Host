import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {UserInterface} from '../models/usersInterface';
import {HotelInterface} from '../models/hotelInterface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HotelHostService {
  hotelsCollection: AngularFirestoreCollection<HotelInterface>;
  hotels: Observable<HotelInterface[]>;
  hotelDoc: AngularFirestoreDocument<HotelInterface>;

  constructor(public afs:AngularFirestore) { 
    //this.hotels = afs.collection('hotels').valueChanges();
    this.hotelsCollection = afs.collection<HotelInterface>('hotels');
    this.hotels = this.hotelsCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as HotelInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  

  getHotels(){
    return this.hotels;
  }
  addHotel(hotel: HotelInterface){
    console.log("Nuevo hotel");
    this.hotelsCollection.add(hotel);
  }
  deleteHotel(){
    console.log("Eliminar hotel");
  }
  UpdateHotel(){
    console.log("Editar hotel");
  }
}
