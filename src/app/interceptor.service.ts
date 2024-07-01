import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  http = inject(HttpClient);

  getData() {
     this.http.get('https://jsonplaceholder.typicode.com/todos')
     .subscribe();
  }

  constructor() { }
}
