# Contribuindo

Uma vez que o _Idvogados_ é um projeto totalmente **open source**, qualquer pessoa/instituição pode contribuir da forma que desejar. Para isso basta seguir o guia de contribuição do projeto e nosso [código de conduta](https://github.com/idvogados/codigo-de-conduta/blob/master/README.md).

_Issues_ ou _pull requests_ que não estejam de acordo com este guia serão recusados.

## Linguagem

- _Commits_ devem ser feitos em inglês.
- _Issues_, _pull requests_ e revisões devem ser feitas em português para facilitar a comunicação e chegar a um consenso rapidamente.

## Desenvolvimento

- Desenvolva apenas em seu _branch_.
- Faça _rebase_ com o **dev** **antes** de criar _pull requests_.
- Faça _rebase_ do **dev** em seu _branch_ diariamente.

#### Como começar

1. Crie um _fork_ do projeto.
2. No seu _fork_, crie uma branch a partir da dev. (seguimos o [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow))
3. Na branch criada, faça suas alterações.
4. Realize o _commit_ seguindo este guia.
5. Abra um _pull request_ mencionando a _issue_ relacionada.
6. Aguarde as aprovações e faça o _merge_ na **dev**

> Como criar um [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)?
> Como criar um [pull request de um fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)?

#### O que **não** fazer quando contribuindo

- Desenvolver direto no **dev**
- _Merge_ de _branches_ no **dev** antes que o código seja revisado.
- _Merge_ de _branches_ no **dev** antes que todas as discussões tenham se encerrado.
- _Merge_ de _pull requests_ que tenham _reviews_ pendentes (_requested_ ou ainda não finalizadas)

## Commits

- Faça _commits_ pequenos, que descrevem alterações únicas.
- Siga as referências sobre como escrever mensagens de _commits_:
  - [_Commit Guidelines_](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)
  - [_How to Write a Git Commit Message_](https://chris.beams.io/posts/git-commit/)
- Seja breve e suscinto no título das mensagens do _commit_.
- Use o corpo da mensagem para explicações adicionais.
- Se esforce para manter a **dev** o mais limpo possível.

#### O que **não** fazer quando commitando

- Burlar a verificação de _linting_ (--no-verify).
- Criar testes fake apenas para passar na verificação.

## Issues

Use _issues_ para discutir problemas e ideias para o projeto.

- Descreva qual é o problema em questão.
- Se possível, dê soluções para o problema.
- Faça _links_ para código ou para referências a outras _issues_/_pull requests_ se necessário.
- Todas as contribuições devem ser baseadas em uma _issue_ aberta.
