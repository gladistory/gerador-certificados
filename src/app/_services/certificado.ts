import { Injectable } from '@angular/core';
import { CertificadosInterface } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class Certificado {

  certificados: CertificadosInterface[] = [];

  constructor() { }

  adicionarCertificado(certificado: CertificadosInterface) {
    this.certificados.push(certificado);
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }

}
