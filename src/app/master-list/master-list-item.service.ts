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
    return this.http.get(this.apiUrl);
  }

  getChosenItem(chosenName: string): Observable<any> {
    return this.getItems().pipe(map((items: any) => items.results.find(item_ => item_.name === chosenName)));
  };
}
