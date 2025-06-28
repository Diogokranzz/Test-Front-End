# Vitrine Tech

> Projeto desenvolvido para o Teste Front-End.

Este projeto foi tem o objetivo é implementar uma vitrine de produtos em React e TypeScript, seguindo o layout fornecido no Figma e consumindo dados de uma API em JSON.

## Demonstração Online

(https://github.com/Diogokranzz/Test-Front-End)

## Especificações Técnicas Atendidas

- Projeto desenvolvido em React com TypeScript
- Consumo de dados via API (com fallback para mock devido a restrições de CORS)
- Modal de detalhes ao clicar em um produto
- Estilização utilizando Sass
- Layout responsivo e fiel ao Figma
- Sem uso de bibliotecas de UI prontas
- HTML semântico e boas práticas de SEO
- Componentização e organização do código

## Diferenciais e Extras

- **Responsividade total**: layout adaptado para desktop, tablet e mobile
- **Acessibilidade**: navegação por teclado, ARIA nos componentes interativos, foco gerenciado no modal
- **SEO aprimorado**: uso de meta tags, headings hierárquicos e alt descritivo nas imagens
- **Experiência do usuário**: animações suaves, loading amigável, mensagem para categorias vazias
- **Código limpo**: comentários explicativos, organização e tipagem clara
- **Pronto para produção**: basta liberar o CORS para consumir a API real
- **Testes automatizados**: inclui teste básico de renderização de componentes

## Observação sobre a API

O projeto está pronto para consumir a API real da Econverse, porém, devido a restrições de CORS no endpoint, não é possível acessar os dados diretamente do ambiente local. Por isso, utilizei um fallback com dados mockados idênticos ao JSON da API. Caso o CORS seja liberado, a aplicação irá consumir os dados reais automaticamente, sem necessidade de alterações no código.

## Como rodar o projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone [URL_DO_SEU_REPOSITORIO]
   cd vitrine-produtos-app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```
4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ProductGrid.tsx  # Vitrine principal
│   ├── ProductCard.tsx  # Card individual
│   └── ProductModal.tsx # Modal de detalhes
├── styles/              # Arquivos SCSS
├── types/               # Definições TypeScript
├── data/                # Dados mockados
└── App.tsx              # Componente principal
```

## Pontos de Avaliação

- Organização do projeto e dos arquivos
- Lógica do código e clareza na implementação
- Componentização e reutilização de código
- Fidelidade ao layout do Figma
- Responsividade e usabilidade
- Boas práticas de SEO e HTML semântico
- Uso correto do TypeScript

## Observações Finais

- O projeto está pronto para consumir a API real, bastando que o CORS seja liberado pelo servidor da Econverse.
- Todos os requisitos obrigatórios e pontos extras foram implementados.
- O código está comentado e organizado para facilitar a avaliação.

## Contato

Em caso de dúvidas, estou à disposição para esclarecimentos.

---


