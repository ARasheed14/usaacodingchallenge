import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";

import { FoodList, Report, Food } from "../../app/foods/foods";

import { StorageServiceProvider } from "../storage-service/storage-service";

/*
  Generated class for the FoodsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodsServiceProvider {

  apiKey = 'eILhkQhgnpr4kP483hRm0VkVTxdO33dQzZ9dDzIv';
  apiUrl = 'https://api.nal.usda.gov/ndb/';

  constructor(public http: Http, private storageService: StorageServiceProvider) {
    console.log('Hello FoodsServiceProvider Provider');
    this.storageService.getItem('Yo').subscribe(data => {
      console.log(data);
    });
  }
  searchFoods(searchText: String): Observable<FoodList>{

    return this.storageService.getItem(searchText).flatMap(data => {
      if(data == null){
        console.log('is null');
        let url = this.apiUrl + `search/?format=json&q=${searchText}&sort=n&max=25&offset=0&api_key=${this.apiKey}`;
        return this.http.get(url).map(res => {
          let list = res.json().list;
          this.storageService.setItem(searchText, JSON.stringify(list));
          return res.json().list});
      } else {
        console.log('its in the cache');
        return Observable.of(JSON.parse(data));
      }
    });
  }
  getFoodDetails(ndbno: String): Observable<Report>{
    return this.storageService.getItem(ndbno).flatMap(data => {
      if(data == null){
        console.log('is null');
        let url = this.apiUrl + `reports/?ndbno=${ndbno}&type=b&format=json&api_key=${this.apiKey}`;
        return this.http.get(url).map(res => {
          let foodReport = res.json().report;
          this.storageService.setItem(ndbno, JSON.stringify(foodReport));
          return res.json().report});
      } else {
        console.log('its in the cache');
        return Observable.of(JSON.parse(data));
      }
    });
  }
}
