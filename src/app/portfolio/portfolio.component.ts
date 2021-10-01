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
      name: "Angular.io", 
      link: "https://angular.io/", 
      image: "../../assets/projectLogos/angular.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },
    { 
      name: "Firebase", 
      link: "https://firebase.google.com/", 
      image: "../../assets/projectLogos/Firebase_Logo.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },{ 
      name: "Flex Layout", 
      link: "https://tburleson-layouts-demos.firebaseapp.com/", 
      image: "../../assets/projectLogos/flex.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },
    { 
      name: "Angular.io", 
      link: "https://angular.io/", 
      image: "../../assets/projectLogos/angular.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },
    { 
      name: "Firebase", 
      link: "https://firebase.google.com/", 
      image: "../../assets/projectLogos/Firebase_Logo.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },{ 
      name: "Flex Layout", 
      link: "https://tburleson-layouts-demos.firebaseapp.com/", 
      image: "../../assets/projectLogos/flex.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },
    { 
      name: "Angular.io", 
      link: "https://angular.io/", 
      image: "../../assets/projectLogos/angular.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },
    { 
      name: "Firebase", 
      link: "https://firebase.google.com/", 
      image: "../../assets/projectLogos/Firebase_Logo.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    },{ 
      name: "Flex Layout", 
      link: "https://tburleson-layouts-demos.firebaseapp.com/", 
      image: "../../assets/projectLogos/flex.png", 
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facilis sequi nihil amet.." 
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route:string) {
    this.router.navigate([route]);
  }
}
