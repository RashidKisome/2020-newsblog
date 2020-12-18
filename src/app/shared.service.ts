import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // För titeln
  blogTitle = '2020 newsblog';
  baseUrl = 'http://localhost:4200/';
  constructor() {}
}
