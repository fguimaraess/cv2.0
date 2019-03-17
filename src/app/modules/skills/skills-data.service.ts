import { BehaviorSubject, Observable } from 'rxjs';
import { SkillsComponent } from './skills.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  skillsList: Skill[];
  list;
  constructor(private db: AngularFireDatabase) {
}

  getAll(): Observable<any> {
    return this.db.list('/skills').valueChanges()
  }
}

export interface Skill {
    nome: string;
    rating: number;
    order: number;
    likes: number;
}