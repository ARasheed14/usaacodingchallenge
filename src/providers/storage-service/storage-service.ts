import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello StorageServiceProvider Provider');
  }
  setItem(key, value){
    return Observable.fromPromise(this.storage.set(key, value));
  }
  deleteItem(key){
    return Observable.fromPromise(this.storage.remove(key));
  }
  getItem(key){
    return Observable.fromPromise(this.storage.get(key));
  }
}
