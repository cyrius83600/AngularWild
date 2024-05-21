import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { nasaApi } from './nasaApi';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  // http = inject(HttpClient);
  constructor(private http:HttpClient){}

  getImageOfTheDay(): Observable<nasaApi> {
    return this.http.get<nasaApi>("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  }


  
}
