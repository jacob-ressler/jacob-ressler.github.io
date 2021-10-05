import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonComponent } from './components/button/button.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    LandingComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ButtonComponent,
    ProjectcardComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
