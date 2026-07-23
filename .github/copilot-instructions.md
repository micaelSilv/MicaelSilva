# Instrucoes do projeto

## Contexto

Este e um portfolio pessoal estatico em HTML, CSS e JavaScript, publicado como site estatico. O idioma da interface e portugues do Brasil. O visual atual usa fundo escuro, tipografia Space Grotesk, destaque laranja, bordas discretas e componentes com bastante contraste.

## Objetivo

Toda alteracao deve melhorar o portfolio de forma concreta, mantendo uma identidade visual profissional, consistente e responsiva. Priorize resultado visual real no navegador, clareza de conteudo, acessibilidade e manutencao simples.

## Regras de implementacao

- Leia o HTML, CSS e JavaScript relacionados antes de editar.
- Preserve a estrutura existente e faca a menor alteracao que resolva o pedido.
- Nao substitua o projeto por um framework ou build system sem pedido explicito.
- Use HTML semantico, CSS nativo e JavaScript simples, seguindo os padroes ja existentes.
- Nao remova mudancas existentes do usuario nem reescreva arquivos inteiros sem necessidade.
- Mantenha os textos em portugues e preserve os dados pessoais e links que ja estiverem corretos.
- Nao invente metricas, experiencias, clientes, depoimentos ou links reais.
- Evite comentarios no codigo, exceto quando explicarem uma decisao realmente nao obvia.
- Use nomes de classes descritivos e nao use nomes de variaveis de uma letra.
- Mantenha o codigo em ASCII quando nao houver necessidade de Unicode.

## Direcao visual

- Preserve a linguagem visual escura e o laranja de destaque ja definidos nas variaveis CSS.
- Evite layouts genericos de cards empilhados, gradientes roxos, excesso de sombras ou elementos decorativos sem funcao.
- Use uma hierarquia tipografica forte, espacamento consistente e componentes alinhados por uma grade clara.
- Nao coloque um card de fundo em textos que devam aparecer diretamente sobre o fundo da pagina.
- Botoes e controles devem ter estados de hover, focus-visible e contraste suficiente.
- Nao use texto em caixa arredondada quando um simbolo ou icone familiar resolver melhor a acao.
- Nao use emojis como parte do design ou da interface.

## Responsividade

- Teste pelo menos desktop e celular antes de concluir uma alteracao visual.
- Para telas pequenas, priorize coluna unica, imagem centralizada, texto centralizado quando solicitado e largura segura para leitura.
- Nao dependa apenas de orientation para resolver responsividade; use breakpoints de largura e confirme o comportamento no viewport real.
- Mantenha margens laterais coerentes em todas as secoes.
- Nao permita overflow horizontal, sobreposicao de texto, elementos fora da viewport ou mudancas de tamanho causadas por texto dinamico.
- Quando um elemento visual precisar alinhar com uma linha, grade ou marcador, calcule o centro do elemento e do eixo, em vez de ajustar apenas visualmente por tentativa.
- Preserve desktop e mobile separadamente quando um ajuste de um viewport puder quebrar o outro.

## Validacao obrigatoria

Depois de qualquer edicao:

1. Verifique erros nos arquivos alterados.
2. Abra ou recarregue o site em um servidor local quando a mudanca for visual.
3. Confira o resultado no navegador, incluindo a largura afetada e pelo menos um viewport alternativo.
4. Confirme que imagens, fontes, links, navegacao, animacoes e secoes existentes continuam funcionando.
5. Informe claramente o que foi alterado e qualquer limitacao de validacao.

## Publicacao

- O projeto pode ser servido como site estatico por `python -m http.server 8000`.
- Nao faca commit, push ou publicacao no GitHub sem pedido explicito e sem um repositorio remoto definido.
- Nunca solicite ou grave senhas, tokens ou chaves de acesso em arquivos do projeto.
- Antes de publicar, confirme o repositorio e a branch de destino.
