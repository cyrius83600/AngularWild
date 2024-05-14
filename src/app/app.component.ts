import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevelopperComponent } from './developper/developper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DevelopperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quete';
}
