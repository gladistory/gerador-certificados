import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from './components/ui-base/ui-base';
import { NgToastModule } from 'ng-angular-popup';
import { ToasterPosition } from 'ng-angular-popup';


@Component({
  selector: 'app-root',
  imports: [Navbar, UiBase, RouterOutlet, NgToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificados';

  position: ToasterPosition = 'toaster-top-right' as ToasterPosition;
}
