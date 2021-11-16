/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  currentPath = '/sign-in';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event) => {
            this.currentPath = event['url'];
            console.log('currentPath', this.currentPath);
        });
    }
}
