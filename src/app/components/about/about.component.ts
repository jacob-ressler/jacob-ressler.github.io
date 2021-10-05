import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { faDeaf } from '@fortawesome/free-solid-svg-icons';
import * as data from '../../../assets/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  i: number = 0;
  @Input() imgclass!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(data.default);
    this.load(this.i);
  }

  load(index: number) {
    console.log(`loading ${index}...`);
    let abtTitle = document.getElementById('abtTitle');
    let abtBody = document.getElementById('abtBody');
    let abtText = document.getElementById('abtText');

    this.imgclass = data.default[index].imgclass;

    if (abtTitle)
      abtTitle.innerText = data.default[index].title;

    if (abtBody) {
      let bodyData: [] = data.default[index].body;
      let bodyStr = '';
      bodyData.forEach((p: string) => {
        bodyStr += `<br>${p}<br>`;
      });

      abtBody.innerHTML = bodyStr;
    }

  }
  
  loadPrevious() {
    this.i = this.i - 1 < 0 ? data.default.length - this.i - 1 : this.i - 1;


    this.load(this.i);
  }

  loadNext() {
    this.i = (++this.i) % data.default.length;
    this.load(this.i);
  }
}
