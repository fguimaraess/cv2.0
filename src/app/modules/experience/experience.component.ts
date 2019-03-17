import { Component,OnInit } from '@angular/core';
import {
  AngularFireStorage
} from '@angular/fire/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(private _storage: AngularFireStorage,
    private router: Router) {}
    link: string;
  ngOnInit() {
    this.getLink();
  }

  downloadCV() {
    var fileName = "cv/CV.pdf"
    var storage = this._storage.storage;
    var urlFirebase = '';
    var pathReference = storage.ref(fileName);
    return pathReference.getDownloadURL();
  }

  getLink () {
    // this.router.navigateByUrl('https://google.com.brs');
    // }
    this.downloadCV().then(data => {
      this.link = data;
    })
  }

}
