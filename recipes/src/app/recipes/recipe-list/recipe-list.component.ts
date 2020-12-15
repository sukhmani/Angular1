import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe ('A text Recipe','test','https://www.google.com/search?hl=en&tbm=isch&sxsrf=ALeKk03yzYSHRCKmnYmHNKW71gsqf2Pojg%3A1607996881783&source=hp&biw=652&bih=600&ei=0RXYX9OaLZbQ-gTxhJHgBw&q=food&oq=food&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyAggAMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6CAgAELEDEIMBUJYdWIsqYNMuaABwAHgAgAE7iAHVAZIBATSYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwiTx76X787tAhUWqJ4KHXFCBHwQ4dUDCAc&uact=5#imgrc=aXAU-PO_SNbH4M')
];
  constructor() { }

  ngOnInit(): void {
  }

}
