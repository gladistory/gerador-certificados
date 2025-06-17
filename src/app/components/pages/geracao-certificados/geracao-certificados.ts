import { Component } from '@angular/core';
import { PrimaryButton } from '../../primary-button/primary-button';
import { SecundaryButton } from '../../secundary-button/secundary-button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-geracao-certificados',
  imports: [PrimaryButton, SecundaryButton, FormsModule, CommonModule],
  templateUrl: './geracao-certificados.html',
  styleUrl: './geracao-certificados.css'
})
export class GeracaoCertificados {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = ["testes", "provas", "atividades", "exercícios"];
}
