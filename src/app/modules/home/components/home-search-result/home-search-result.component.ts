import { Component, Input } from '@angular/core';
import { Item } from '@modules/home/interfaces/item.interface';

@Component({
  selector: 'app-home-search-result',
  templateUrl: './home-search-result.component.html',
  styleUrls: ['./home-search-result.component.scss']
})
export class HomeSearchResultComponent {

  @Input() item: Item;

}