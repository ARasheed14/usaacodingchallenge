import { Component } from '@angular/core';
import { Food,Report } from "../foods";
import { FoodsServiceProvider } from "../../../providers/foods-service/foods-service";
import { FavoritesProvider } from "../../../providers/favorites/favorites";
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodsDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foods-detail',
  templateUrl: 'foods-detail.component.html'
})
export class FoodsDetailComponent {

  food: Food = {};
  text: string;

  constructor(
    private favoritesService: FavoritesProvider,
    private foodService: FoodsServiceProvider,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.getReport();
  }

  getReport(){
    let ndbno = this.navParams.get('ndbno');
    this.foodService.getFoodDetails(ndbno).subscribe((data:Report) => {
      this.food = data.food;
    });
  }

  favorite(){
    this.favoritesService.setDetailFoodFavorite(this.food).subscribe((data)=>{});
  }

}
