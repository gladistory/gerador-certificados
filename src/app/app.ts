import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecundaryButton } from './components/secundary-button/secundary-button';
SecundaryButton

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecundaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificados';
}
