import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelevisorComponent } from './components/televisor/televisor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TelevisorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcialweb';
}
