import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from './skills-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: any[];
  constructor(private _skillsService: SkillsDataService) { }

  ngOnInit() {
    this._skillsService.getAll()
      .subscribe(skills => {
      this.skillsList = skills;
    });
  }

}
