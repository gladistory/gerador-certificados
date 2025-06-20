import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from './components/ui-base/ui-base';
import { NgToastModule } from 'ng-angular-popup';
import { ToasterPosition } from 'ng-angular-popup';
import { Certificado } from './_services/certificado';

@Component({
  selector: 'app-root',
  imports: [Navbar, UiBase, RouterOutlet, NgToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private certificadoService: Certificado) { }

  ngOnInit() {

    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
  protected title = 'gerador-certificados';

  position: ToasterPosition = 'toaster-top-right' as ToasterPosition;
}
