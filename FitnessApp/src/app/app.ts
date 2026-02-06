import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ContentContainer } from './content-container/content-container';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ContentContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('FitnessApp');
}
