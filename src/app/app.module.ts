import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule  } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './model/home/home.component';
import { UserDetailsComponent } from './model/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './model/navbar/navbar.component';
import { SkillsComponent } from './model/skills/skills.component';
import { ExperienceComponent } from './model/experience/experience.component';
import { ProjectsComponent } from './model/projects/projects.component';
import { ContactComponent } from './model/contact/contact.component';
import { ProfileContentComponent } from './model/profile-content/profile-content.component';

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
    ProfileContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
