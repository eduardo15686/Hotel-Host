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
  hotelsColection: AngularFirestoreCollection<HotelInterface>;
  hotels: Observable<HotelInterface[]>;
  hotelDoc: AngularFirestoreDocument<HotelInterface>;

  constructor(public afs:AngularFirestore) { 
    this.hotels = afs.collection('hotels').valueChanges();
  }

  

  getHotels(){
    return this.hotels;
  }
}
