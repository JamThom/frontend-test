import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';
import { Item } from './interfaces/item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe((items) => this.items = items);
  }

  get topLevelItems(): Item[] {
    return this.items.filter((item) => item.parent_id === null);
  }

  trackItems(index: number, item: Item): number {
    return item.id;
  }

}
