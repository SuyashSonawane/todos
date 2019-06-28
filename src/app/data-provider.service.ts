import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private todoCollection: AngularFirestoreCollection<any>;
  private todos: Observable<any[]>;
  public currentId;

  constructor(private afs: AngularFirestore) {
    // this.todos = afs.collection('todos').valueChanges();
    this.todos = afs.collection('todos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );
  }

  getItems() {
    return this.todos;
  }
  removeItem(id) {
    this.afs.collection('todos').doc(id).delete();
  }
  getTodo(id) {
    return this.afs.collection('todos').doc(id).valueChanges();
  }
  addTodo(name, message) {
    let todo = {
      name,
      message,
      time: Date.now()
    }
    return this.afs.collection('todos').add(todo);
  }
}
