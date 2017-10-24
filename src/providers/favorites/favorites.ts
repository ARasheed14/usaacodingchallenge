import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StorageServiceProvider } from "../storage-service/storage-service";
import { FoodList, Report, Food } from "../../app/foods/foods";

/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {
  static storageKey: string = 'favorites';

  constructor(public http: Http, private storageService: StorageServiceProvider) {
    this.storageService.getItem(FavoritesProvider.storageKey)
      .subscribe((data) => {
        // if key doesn't exist in local storage create it
        if (data == null) {
          this.storageService.setItem(FavoritesProvider.storageKey, JSON.stringify([]));
        }
      });
  }

  getFavoriteFoods() {
    return this.storageService.getItem(FavoritesProvider.storageKey);
  }

  setDetailFoodFavorite(food: Food) {
    return this.storageService
      .getItem(FavoritesProvider.storageKey)
      .map((data) => {
        let d = JSON.parse(data);
        d.push({
          'ndbno': food.ndbno,
          'value': food
        });
        return this.storageService.setItem(FavoritesProvider.storageKey, JSON.stringify(d));
      })
  }

  getDetailFoodFavorite(ndbno) {
    return this.storageService
      .getItem(FavoritesProvider.storageKey)
      .map(res => JSON.parse(res))
      .filter((value: Food) => {
        return value.ndbno == ndbno
      });
  }

  removeDetailFoodFavorite(ndbno) {
    return this.storageService
      .getItem(FavoritesProvider.storageKey)
      .map(res => JSON.parse(res))
      .filter((value: Food) => {
        return value.ndbno != ndbno
      });
  }

}
