import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ProjectsDataService } from './projects-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isToShowProjects: boolean = false;
  projects: any[];
  constructor(private _projectService: ProjectsDataService) { }

  ngOnInit() {
    this._projectService.getAll()
    .subscribe(projects => {
      this.projects = this.getOrderedProjects(projects);
      this.isToShowProjects = true; 
    });
  }

  getOrderedProjects(projects): any {
    projects = projects.filter(x => x.active == 1);
    return _.orderBy(projects, ['order']);
  }
}
