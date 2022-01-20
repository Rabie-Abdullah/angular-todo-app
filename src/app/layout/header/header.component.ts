import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  date:any
  ngOnInit(): void {
    timer(0, 100).subscribe(() => {
      this.date = new Date()
    })
  }

}
