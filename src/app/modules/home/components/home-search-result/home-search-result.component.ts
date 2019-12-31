import { Component, Input } from '@angular/core';
import { Item } from '@modules/home/interfaces/item.interface';

@Component({
  selector: 'app-home-search-result',
  templateUrl: './home-search-result.component.html',
  styleUrls: ['./home-search-result.component.scss']
})
export class HomeSearchResultComponent {

  @Input() itemId: number;
  @Input() items: Item[];

  get currentItem(): Item {
    return this.items.filter((item) => item.id === this.itemId)[0];
  }

  get childItems(): Item[] {
    return this.items.filter((item) => item.parent_id === this.itemId);
  }

  trackItems(index: number, item: Item): number {
    return item.id;
  }

}
