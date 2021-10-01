import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  activeRoute: string = "home";
  menuItems: any[] = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Portfolio", value: "portfolio" },
    { name: "Contact", value: "contact" },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let url:any = event.url.split("/").pop();
        this.navigateTo(url);
      }
    });
  }

  ngOnInit(): void {
  }

  navigateTo(item: string) {
    this.activeRoute = item;
    if (item == 'home') {
      this.router.navigate([item]);
    } else {
      this.router.navigate([`home/${item}`]);
    }
  }
}
