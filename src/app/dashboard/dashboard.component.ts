import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userName: string;
  private breakpoint: number;
  private tickets: object;
  private displayedColumns: string[];
  constructor(private http: HttpClient) {
    this.userName = 'Hardcode';
    this.breakpoint = 0;
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.http.get('https://5db5f4b0f6869d001474a239.mockapi.io/pn/getAllTickets')
      .subscribe(
        data => {this.tickets = data; },
        error => {console.log(error)}
      );
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }

}
