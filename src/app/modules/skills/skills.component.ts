import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from './skills-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: any[];
  isToShowSkills: boolean = false;
  constructor(private _skillsService: SkillsDataService) { }

  ngOnInit() {
    this._skillsService.getAll()
      .subscribe(skills => {
      this.skillsList = this.getSkillsInOrder(skills);
      this.isToShowSkills = true;
    });
  }

  getSkillsInOrder(skills): any {
    return _.orderBy(skills, ['order']);
  }

}
