
**Publicação Do Blogue**
Sua tarefa é criar um aplicativo React chamado " Blog
Post " que permite aos usuários criar, exibir e excluir blog
mensagens. Os requisitos de aplicação são detalhados abaixo,
e a aplicação final deve passar por todos os testes de unidade.
Requisitos Pormenorizados

1. O componente "Blog Post" deve ter duas entradas
   campos: um para o título do post e outro para o
   descrição do post (área de texto).
2. O aplicativo deve exibir um botão " Criar
   que, quando clicado, adiciona uma nova postagem de blog à lista
   dos lugares existentes.
3. O botão" Criar " só deve adicionar um post se ambos
   os campos Título e descrição têm valores. Se qualquer um
   campo está vazio, o botão não deve criar um post.
4. Uma vez que um post é criado com sucesso, tanto o título
   e os campos de descrição devem ser limpos.
5. A lista de postagens de blog criadas deve ser exibida
   em um layout de grade, com cada postagem aparecendo dentro de um
   caixa.
6. Cada caixa deve incluir:

* Título do post.
* Descrição do post.
* Um botão "Excluir" para remover o
  publicação da lista.
  Interação Da Amostra
  Estado Inicial
  • Os campos Título e descrição estão vazios.
  Não são apresentadas publicações no blogue.
  Acção Do Utilizador 1
* O utilizador introduz um título e uma descrição no respectivo
  campos de entrada.
* O usuário clica no botão" Criar".
* O novo post é adicionado à grade com a entrada
  título e descrição.
  • Os campos de entrada estão desmarcados.
  Acção Do Utilizador 2
* O usuário clica no botão" Excluir " ao lado de uma postagem no blog.
  • A postagem do blog selecionada é removida da grade.
