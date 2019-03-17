import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  projectList: Project[];
  list;
  constructor(private db: AngularFireDatabase) {
}

  getAll(): Observable<any> {
    return this.db.list('/projects').valueChanges()
  }
}

export interface Project {
    title: string;
    content: string;
    order: number;
    url: string;
    repository: string;
    active: number;
}