import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {faDrumstickBite,faCircle,faWineGlass,faPizzaSlice,faFish,faUtensils,faCheese,faPlusCircle,faMinusCircle,faCartPlus,faCommentAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
Chickenicon=faDrumstickBite;
allicon=faCircle;
drinkicon=faWineGlass;
pizzaicon=faPizzaSlice;
seafoodicon=faFish;
meaticon=faUtensils;
appetizersicon=faCheese;
plusicon=faPlusCircle;
minusicon=faMinusCircle;
addtocart=faCartPlus;
addComment=faCommentAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
