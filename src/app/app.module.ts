import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProfileContentComponent } from './modules/profile-content/profile-content.component';
import { SocialMediaComponent } from './modules/social-media/social-media.component';
import { LastNewsComponent } from './modules/last-news/last-news.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ProfileRoutingModule } from './modules/profile-content/profile-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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
    LastNewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ProfileRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
