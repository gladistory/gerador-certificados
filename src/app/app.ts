import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from './components/ui-base/ui-base';



@Component({
  selector: 'app-root',
  imports: [Navbar, UiBase, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificados';
}
