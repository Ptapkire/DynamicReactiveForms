import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dynamicform } from './components/dynamicform/dynamicform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dynamicform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamicReactiveForms');
}
