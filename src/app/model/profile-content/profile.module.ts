import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  imports: [
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CommonModule,
    ProfileRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class ProfileModule { }
