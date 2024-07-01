import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterceptorService } from './interceptor.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptor';

  interceptorService = inject(InterceptorService);

  testService(){
    this.interceptorService.getData();
  }


    

}
