import { Component } from '@angular/core';
import { PrimaryButton } from '../../primary-button/primary-button';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../../interfaces/certificado';


@Component({
  selector: 'app-geracao-certificados',
  imports: [PrimaryButton, SecundaryButton, FormsModule, CommonModule],
  templateUrl: './geracao-certificados.html',
  styleUrls: ['./geracao-certificados.css']
})
export class GeracaoCertificados {


  atividade: string = '';
  certificado: Certificado = {
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

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
    console.log(this.certificado);
  }

}

