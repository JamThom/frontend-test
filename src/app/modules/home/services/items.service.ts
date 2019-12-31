import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Item } from '@modules/home/interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('client error:', error.error.message);
    } else {
      console.error('server error:', `${error.status},\n${error.error}`);
    }
    return throwError('An error occured.');
  }

  getItems() {
    return this.http.get<Item[]>(this.itemUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

}
