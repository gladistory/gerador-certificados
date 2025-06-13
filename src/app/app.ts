import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecundaryButton } from './components/secundary-button/secundary-button';
import { ItemCertificado } from './components/item-certificado/item-certificado';
import { UiBase } from './components/ui-base/ui-base';
import { Certificados } from './components/pages/certificados/certificados';


@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecundaryButton, ItemCertificado, UiBase, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificados';
}
