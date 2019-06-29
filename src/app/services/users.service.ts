import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {UserInterface} from '../models/usersInterface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection: AngularFirestoreCollection<UserInterface>;
  users: Observable <UserInterface[]>;
  userDoc: AngularFirestoreDocument<UserInterface>;

  constructor(public afs:AngularFirestore) { 
    this.usersCollection = afs.collection<UserInterface>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map (a =>{
        const data = a.payload.doc.data() as UserInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  addUser(user: UserInterface){
    console.log("Nuevo hotel");
    this.usersCollection.add(user);
  }

}
