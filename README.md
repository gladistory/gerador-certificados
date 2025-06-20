# Gerador de Certificados – Documentação Técnica

### Acesse em: - [Gerador de Certificados]([https://angular.io/docs](https://gladistory.github.io/gerador-certificados/))

## Visão Geral

O Gerador de Certificados é uma aplicação web desenvolvida para facilitar a criação, visualização e gerenciamento de certificados digitais. O sistema permite ao usuário cadastrar informações, gerar certificados personalizados e visualizar o histórico de certificados emitidos.

- **Tech Stack:** TypeScript, Angular
- **Público-alvo:** Desenvolvedores e mantenedores do projeto

---

## Arquitetura

### Estrutura de Pastas

```
src/
  app/
    components/
      item-certificado/
      navbar/
      pages/
        certificados/
        geracao-certificados/
        preview-certificado/
      primary-button/
      secundary-button/
      ui-base/
    app.config.ts
    app.html
    app.routes.ts
    app.spec.ts
    app.ts
  index.html
  main.ts
  styles.css
public/
  certificado/
  navbar/
```

### Componentização

- **Navbar:** Navegação principal da aplicação.
- **UiBase:** Container base para o conteúdo das páginas.
- **Pages:** 
  - `certificados`: Lista de certificados gerados.
  - `geracao-certificados`: Formulário para geração de novos certificados.
  - `preview-certificado`: Visualização detalhada do certificado.
- **Buttons:** Botões reutilizáveis (`primary-button`, `secundary-button`).
- **ItemCertificado:** Exibe informações individuais de um certificado.

---

## Fluxo Principal

1. **Navegação:** O usuário acessa a aplicação e visualiza a lista de certificados.
2. **Geração:** Ao clicar em "Gerar certificado", é exibido um formulário para preenchimento dos dados.
3. **Visualização:** Após gerar, o usuário pode visualizar o certificado em detalhes.

---

## Padrões de Código

- **Componentização:** Separação clara de responsabilidades por componente.
- **Estilização:** Uso de CSS modular por componente.
- **Boas práticas Angular:** Uso de `@Component`, `RouterLink` e módulos do Angular.

---

## Uso

### Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```sh
   npm start
   ```
3. Acesse via navegador em `http://localhost:4200`

### Estrutura de uma página

```html
<app-navbar></app-navbar>
<app-ui-base>
    <router-outlet></router-outlet>
</app-ui-base>
```

---

## Pontos a Definir

- Adicionar integração com backend para persistência dos certificados.
- Implementar autenticação de usuários.
- Detalhar regras de negócio para geração e validação dos certificados.
- Expandir cobertura de testes automatizados.

---

## Referências

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/)

---

> **Nota:** Para detalhes específicos de regras de negócio, integrações externas ou fluxos avançados, inserir informações nesta documentação conforme evoluir o projeto.
