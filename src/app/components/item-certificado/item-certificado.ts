import { Component, Input } from '@angular/core';
import { SecundaryButton } from '../secundary-button/secundary-button';
import { Router } from '@angular/router';
import { Certificado } from '../../_services/certificado';
import { CertificadosInterface } from '../../interfaces/certificado';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: string = '12345';

  @Input() nome: string = '';
  @Input() data: string = '';
  @Input() idCertificado: any = null;

  constructor(private router: Router, private certificadoService: Certificado) { }

  redirectToCertificado(idCertificado: any) {
    this.router.navigate(['/preview-certificado', idCertificado]);
  }



}
