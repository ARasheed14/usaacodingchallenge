import { Component } from '@angular/core';
import { FoodsDetailComponent } from "../foods-detail/foods-detail.component";
import { FoodList, FoodListItem } from "../foods";
import { FoodsServiceProvider } from "../../../providers/foods-service/foods-service";
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foods-list-comp',
  templateUrl: 'foods-list.component.html'
})
export class FoodsListComponent {

  // Properties
  foodsList: FoodListItem[];
  searchText: String;
  text: string;

  constructor(private foodService: FoodsServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
    console.log('Hello FoodsComponent Component');
    this.text = 'Hello World';
  }
  getFoods(){

  }
  search(){
    console.log(this.searchText);
    this.foodService.searchFoods(this.searchText).subscribe((data) => {
      this.foodsList = data.item;
      console.log(data);
    });
  }
  openFoodDetail(ndbno){
    this.navCtrl.push(FoodsDetailComponent, {ndbno:ndbno});
  }
  favorite(){

  }

}
