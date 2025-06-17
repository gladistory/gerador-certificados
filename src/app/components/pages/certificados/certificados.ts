import { Component } from '@angular/core';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { ItemCertificado } from '../../item-certificado/item-certificado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [SecundaryButton, ItemCertificado, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

  routeCreateCertificado = '/gerador-certificados';
}
