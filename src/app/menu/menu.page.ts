import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  appMenu = [
    {title: 'master-list', url:'/master-list'},
    {title: 'master-list', url:'/master-list'},
    {title: 'master-list', url:'/master-list'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
