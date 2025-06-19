import { Component } from '@angular/core';
import { PrimaryButton } from '../../primary-button/primary-button';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadosInterface } from '../../../interfaces/certificado';
import { Certificado } from '../../../_services/certificado';
import { RedirectCommand } from '@angular/router';


@Component({
  selector: 'app-geracao-certificados',
  imports: [PrimaryButton, SecundaryButton, FormsModule, CommonModule],
  templateUrl: './geracao-certificados.html',
  styleUrls: ['./geracao-certificados.css']
})
export class GeracaoCertificados {

  constructor(private certificadoService: Certificado) { }


  atividade: string = '';
  certificado: CertificadosInterface = {
    atividades: [],
    nome: '',
    data: new Date().toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  };

  deleteAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  addAtividade() {
    if (this.atividade.trim() !== '') {
      this.certificado.atividades.push(this.atividade.trim());
      this.atividade = '';
    }
  }

  validateForm() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  clearForm() {
    this.certificado = {
      nome: '',
      data: new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      atividades: []
    };
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
    this.certificadoService.adicionarCertificado(this.certificado);
    this.clearForm();
  }

}

