import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  
  constructor(private contentsvc: ContentService) {

   }

  ngOnInit() {
    this.contentsvc.active.subscribe(data => {
      console.log(data + ' [from navigation]');
    });
  }

  // show the corresponding component in the content area
  show(compname: string) {
    this.contentsvc.updateContent(compname);
  }

}
