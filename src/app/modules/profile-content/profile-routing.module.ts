import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { ProfileContentComponent } from './profile-content.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [{
  path: 'module',
  component: HomeComponent,
  children: [{
      path: 'skills',
      component: SkillsComponent
    },
    {
      path: 'experiences',
      component: ExperienceComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule {}
