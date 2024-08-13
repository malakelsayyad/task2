import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignComponent } from "./design/design.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';
}
