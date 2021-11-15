import { MasterListItemService } from './master-list/master-list-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private masterListItemService: MasterListItemService) {}

  ngOnInit() {
    this.masterListItemService.getItems();
  }
}
