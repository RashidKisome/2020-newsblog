import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }
  // Här filtrerar vi artiklarna också och returnar första artikel i arrayen
  // Lägger till "of" i return för att det är en observable
  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter((a) => a.key === key);
    return of(articles[0]);
  }
}
