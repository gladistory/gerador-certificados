import { Component } from '@angular/core';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { Certificado } from '../../../_services/certificado';
import { CertificadosInterface } from '../../../interfaces/certificado';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-preview-certificado',
  imports: [SecundaryButton, RouterLink, RouterModule],
  templateUrl: './preview-certificado.html',
  styleUrl: './preview-certificado.css'
})
export class PreviewCertificado {

  certificado: CertificadosInterface[] = [];

  constructor(private certificadoService: Certificado) { }

  ngOnInit() {
    this.certificado = this.certificadoService.certificados;
    console.log(this.certificado);
  }

}
