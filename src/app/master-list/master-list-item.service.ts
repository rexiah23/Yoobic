/* eslint-disable max-len */
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MasterListItemService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.apiUrl);
  }
}
