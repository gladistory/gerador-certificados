import { Component } from '@angular/core';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { Certificado } from '../../../_services/certificado';
import { CertificadosInterface } from '../../../interfaces/certificado';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-certificado',
  imports: [SecundaryButton, RouterLink, RouterModule],
  templateUrl: './preview-certificado.html',
  styleUrl: './preview-certificado.css'
})
export class PreviewCertificado {

  certificado: CertificadosInterface = {
    id: '',
    atividades: [],
    nome: '',
    data: ''
  };

  constructor(private certificadoService: Certificado, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.certificado = this.certificadoService.certificados.find(cert => cert.id === id) || this.certificado;
    }
  }
}
