import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MasterListItemService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(map((items: any) => {
      //added imagePath property to each item in items because the rest api does not have it
      const copyItemsResults = [...items.results];
      copyItemsResults.forEach(item => item.imagePath = '../../assets/starwarslogo.png');
      return copyItemsResults;
    }));
  }

  getChosenItem(chosenName: string): Observable<any> {
    return this.getItems().pipe(map((items: any) => items.find(item_ => item_.name === chosenName)));
  };
}
