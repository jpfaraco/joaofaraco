---
title: Adeus Wordpress. Olá Jekyll!
subtitle: Obrigado por me servir por tantos anos, Wordpress. Mas é hora de explorar
  outra forma de publicar.
layout: post
---

Desde 2008, meu site roda em uma instalação própria de Wordpress. Não me leve a mal – eu ainda acho o Wordpress a plataforma de gerenciamento de conteúdo mais poderosa que existe. Mas como isso aqui é o meu *sandbox* pessoal, resolvi dar uma sacudida e passar tudo pra conteúdo estático.

Mas por que resolvi fazer isso? Vamos comparar os dois:

* O [Wordpress](http://wordpress.org) é um sistema bastante complexo, construído em PHP. Todo o conteúdo do site fica em um **banco de dados** MySQL e as páginas do site são geradas **dinamicamente** à partir desse conteúdo. 
* O [Jekyll](https://jekyllrb.com/) é um construtor de **páginas estáticas**. Ele não possui banco de dados, e todos os arquivos são simplesmente HTML estático.

Então, com o Jekyll, em vez de eu escrever um post no painel de administração e publicar o conteúdo pro banco de dados, eu escrevo os posts em formato [Markdown](https://daringfireball.net/projects/markdown/ 'Markdown'), e o Jekyll compila os arquivos .html das páginas estáticas.

![]({{ site.baseurl }}/assets/images/joaofaraco-jekyll.png)

Pode parecer meio inconveniente publicar dessa forma, mas há algumas vantagens:

* Não preciso mais pagar pela hospedagem – os arquivos ficam num repositório do Github, que é gratuito.
* A estrutura é mais simples de se manter – nenhum banco de dados e simplesmente arquivos .html, .css e .js.
* Toda a manutenção é feita via controle de versão, então todo backup acontece automaticamente.
* O site é mais rápido, pois o servidor não precisa ficar se comunicando com um banco de dados sempre que carrega uma página.
* Por não ter banco de dados, é muito mais seguro, impedindo que um hacker faça SQL injection, por exemplo.

Ou seja, manter um servidor com PHP + MySQL e uma instalação Wordpress e seus plugins que precisam de constante atualização só pra servir um site que eu atualizo com pouca frequência me parece *overkill*. Eu cheguei a cogitar o Medium, mas pô, esse é o meu domínio pessoal – eu deveria ter controle sobre tudo! 

P.S.: Aproveitei essa migração para experimentar o interessantíssimo [Bulma](https://bulma.io/), como framework de css.