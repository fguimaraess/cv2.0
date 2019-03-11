import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClientModule,
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent implements OnInit {

  constructor(private http: HttpClient) {}
  lastNews: any[];
  
  ngOnInit() {
    this.getLastNews();
    this.lastNews = [];
  }

  getLastNews() {
    var urlGlobo = 'https://newsapi.org/v2/top-headlines?'+
    'country=br&category=technology&pageSize=5&apiKey=5ba73bdc27ac4f2f8ab0714949849007'

    this.http.get(urlGlobo)
      .subscribe((data: any) => {
        data.articles.forEach(article => {
          this.lastNews.push(article);
        });
      });
  }
}
