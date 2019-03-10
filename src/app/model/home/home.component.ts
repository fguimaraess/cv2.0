import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  collapse: boolean = true;
  someMethod() {
    this.trigger.openMenu();
  }

}
