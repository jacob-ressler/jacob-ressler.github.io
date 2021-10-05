import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LandingComponent } from '../landing/landing.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('contentplaceholder', {read: ViewContainerRef, static: true})

  placeholder!: ViewContainerRef;
  next: any; // holds the next


  constructor(private resolver: ComponentFactoryResolver, private contentsvc: ContentService) { }

  async ngOnInit() {
    this.contentsvc.active.subscribe(data => {
      // console.log(data);
      this.updateContent(data);
    });
    this.placeholder.clear();
    this.next = this.resolver.resolveComponentFactory(LandingComponent); // FIXME
    this.placeholder.createComponent(this.next);
    
  }

  // update the placeholder content based on the data string
  updateContent(d: string) {
    console.log(d + ' from content.updateContent()');
    switch (d) {
      case 'about':
        this.next = this.resolver.resolveComponentFactory(AboutComponent);
        break;
      case 'projects':
        this.next = this.resolver.resolveComponentFactory(ProjectsComponent);
        break;
      case 'resume':
        this.next = this.resolver.resolveComponentFactory(ResumeComponent);
        break;
      case 'contact':
        this.next = this.resolver.resolveComponentFactory(ContactComponent);
        break;
      default:
        break;
    }

    if (this.next) {
      // clear the placeholder, then create the new component within
      this.placeholder.clear();
      this.placeholder.createComponent(this.next);
    }
  }

}
