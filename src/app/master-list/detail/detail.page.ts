import { MasterListItemService } from './../master-list-item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  chosenItem;

  constructor(private activatedRoute: ActivatedRoute, private masterListItemService: MasterListItemService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const chosenName = paramMap.get('listItemName');
      this.masterListItemService.getChosenItem(chosenName)
      .subscribe(item => this.chosenItem = item);
    });
  }
}
