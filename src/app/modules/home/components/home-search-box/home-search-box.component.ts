import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-search-box',
  templateUrl: './home-search-box.component.html',
  styleUrls: ['./home-search-box.component.scss']
})
export class HomeSearchBoxComponent {

  @Output() search = new EventEmitter();

  searchTerm = '';

  handleSearch(event: InputEvent) {
    this.search.emit((event.target as HTMLInputElement).value);
  }

}
