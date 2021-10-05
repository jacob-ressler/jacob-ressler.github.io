import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Portfolio | Jacob Ressler');
  }

  setTitle(str: string) {
    this.titleService.setTitle(str);
  }
}
