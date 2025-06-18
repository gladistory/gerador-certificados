import { Component } from '@angular/core';
import { PrimaryButton } from '../../primary-button/primary-button';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-geracao-certificados',
  imports: [PrimaryButton, SecundaryButton, FormsModule, CommonModule],
  templateUrl: './geracao-certificados.html',
  styleUrls: ['./geracao-certificados.css']
})
export class GeracaoCertificados {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];
  formValido: boolean = true;


  deleteAtividade(index: number) {
    this.atividades.splice(index, 1);
  }

  addAtividade() {
    if (this.atividade.trim() !== '') {
      this.atividades.push(this.atividade.trim());
      this.atividade = '';
    }
  }

}

