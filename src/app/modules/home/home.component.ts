import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';
import { Item } from './interfaces/item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[] = [{title:'',id:0,parent_id:0}];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe((items) => this.items = items);
  }

  get topLevelItems(): Item[] {
    console.log(this.items.length);
    return this.items.filter((item) => item.id === item.parent_id);
  }

  trackItems(index: number, item: Item): string {
    return item.title;
  }

}
