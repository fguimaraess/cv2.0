import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './model/home/home.component';
import { SkillsComponent } from './model/skills/skills.component';
import { ExperienceComponent } from './model/experience/experience.component';
import { ProjectsComponent } from './model/projects/projects.component';
import { NotFoundComponent } from './model/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SkillsComponent, pathMatch: 'full' },
  // { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
