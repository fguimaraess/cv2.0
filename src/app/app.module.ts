import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './model/home/home.component';
import { UserDetailsComponent } from './model/user-details/user-details.component';
import { NavbarComponent } from './model/navbar/navbar.component';
import { SkillsComponent } from './model/skills/skills.component';
import { ExperienceComponent } from './model/experience/experience.component';
import { ProjectsComponent } from './model/projects/projects.component';
import { ContactComponent } from './model/contact/contact.component';
import { ProfileContentComponent } from './model/profile-content/profile-content.component';
import { SocialMediaComponent } from './model/social-media/social-media.component';
import { LastNewsComponent } from './model/last-news/last-news.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    NavbarComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ProfileContentComponent,
    SocialMediaComponent,
    LastNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
