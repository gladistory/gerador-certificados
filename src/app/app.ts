import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecundaryButton } from './components/secundary-button/secundary-button';
import { ItemCertificado } from './components/item-certificado/item-certificado';


@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecundaryButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificados';
}
