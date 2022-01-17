import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  workItems: any[] = [
    { 
      name: "Faith Academy Christian School", 
      link: "https://faithacademy-72d2b.web.app", 
      image: "../../assets/projectLogos/faithAcademy.png", 
      description: "A private school for everyone in Ekurhuleni. To measure the greatness of a school, some would count the pupils." 
    },
    { 
      name: "OKEL Holdings", 
      link: "https://okel-holdings.web.app/", 
      image: "../../assets/projectLogos/okel.png", 
      description: "Whether you're Non-SA Citizen, Self-Employed or ITC Listed... We are here to help you find your Dream Car." 
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route:string) {
    this.router.navigate([route]);
  }
}
