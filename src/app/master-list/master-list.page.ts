/* eslint-disable @typescript-eslint/no-shadow */
import { MasterListItemService } from './master-list-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {
  listItems: any[];

  constructor(private masterListItemService: MasterListItemService) { }

  ngOnInit() {
    this.masterListItemService.getItems().subscribe((items: any) => {
      this.listItems = items.results;
    });
  }


}
