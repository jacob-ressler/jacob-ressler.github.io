import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectcardComponent implements OnInit {

  @Input() title!: string;
  @Input() blurb!: string;
  @Input() buttonType!: string;
  @Input() links!: string[];
  @Input() thumbpath!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
