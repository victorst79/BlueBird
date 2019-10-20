import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string;
  breakpoint: number;
  /* @TODO sustituir userName por dato obtenido de API */
  constructor() {
    this.userName = 'Hardcode';
    this.breakpoint = 0;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }

}
