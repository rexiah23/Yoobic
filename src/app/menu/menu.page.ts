import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  appMenu = [
    {title: 'master-list', url:'/master-list'},
    {title: 'sign-in', url:'/sign-in'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
