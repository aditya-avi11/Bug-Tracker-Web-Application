import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamleaderComponent } from './componenets/teamleader/teamleader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamleaderComponent, FormsModule, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';
  isloggedin: boolean = false;
}
