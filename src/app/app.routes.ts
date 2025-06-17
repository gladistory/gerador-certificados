import { Routes } from '@angular/router';
import { Certificados } from './components/pages/certificados/certificados';
import { GeracaoCertificados } from './components/pages/geracao-certificados/geracao-certificados';
import { PreviewCertificado } from './components/pages/preview-certificado/preview-certificado';

export const routes: Routes = [
    {
        path: '',
        component: Certificados
    },
    {
        path: 'gerador-certificados',
        component: GeracaoCertificados
    },
    {
        path: 'preview-certificado/:id',
        component: PreviewCertificado
    }
];
