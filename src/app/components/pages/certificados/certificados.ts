import { Component } from '@angular/core';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { ItemCertificado } from '../../item-certificado/item-certificado';
import { RouterLink } from '@angular/router';
import { Certificado } from '../../../_services/certificado';
import { CertificadosInterface } from '../../../interfaces/certificado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificados',
  imports: [SecundaryButton, ItemCertificado, RouterLink, CommonModule],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

  certificados: CertificadosInterface[] = [];

  constructor(private certificadoService: Certificado) { }

  routeCreateCertificado = '/gerador-certificados';

  ngOnInit() {
    this.certificados = this.certificadoService.certificados.reverse();
  }
}
