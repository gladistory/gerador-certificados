import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { Certificado } from '../../../_services/certificado';
import { CertificadosInterface } from '../../../interfaces/certificado';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview-certificado',
  imports: [SecundaryButton, RouterLink, RouterModule],
  templateUrl: './preview-certificado.html',
  styleUrl: './preview-certificado.css'
})
export class PreviewCertificado {

  @ViewChild('certificadoContainer') certificadoContainer!: ElementRef;

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

  downloadCertificado() {
    html2canvas(this.certificadoContainer.nativeElement, { scale: 2 }).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado_${this.certificado.nome.replaceAll(' ', '_')}.png`;
      link.click();
    }).catch(error => {
      console.error('Erro ao gerar o certificado:', error);
    });
  }
}
