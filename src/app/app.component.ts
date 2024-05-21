import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { nasaApi } from './nasaApi';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nasa';

  nasa:nasaApi= new nasaApi();

  service = inject(NasaService);

  api:nasaApi[] = [];

  imgOfTheDay:String="";

  ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe(api => {
      this.imgOfTheDay = api.url;
    });
  }

  getUrl():String{
    return this.nasa.url;
  }
}
