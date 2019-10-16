---
title: Introdução ao Processing
layout: post
---

Processing é uma linguagem de programação destinada a designers e ilustradores. Foi criada no MIT, e é na verdade um subset da linguagem Java, mas com algumas facilidades destinadas a produção de peças gráficas, animações, interações etc.

A onda do Processing é que é uma linguagem muito fácil de aprender. Assim como outras linguagens como JavaScript e Python, mesmo se você nunca teve experiência prévia com programação, algumas linhas de código e um pouco de raciocínio podem produzir resultados incríveis. E essa sempre foi a sua premissa, desde quando John Maeda e seus estudantes do MIT Media Lab conceberam o projeto em 2001.

Vou falar um pouco do básico, pra você ver se você também se interessa na linguagem, e quem sabe corre atrás de mais informação.

### Começando

Pra início de conversa, você tem que baixar o aplicativo do Processing. Ele é gratuito e está disponível pra download em [http://processing.org](http://processing.org){:target="\_blank"}. Tem versões pra Windows, Mac e Linux. Instale-o e abra.

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-6.23.43-PM.png)

Essa é a janela principal do Processing. Não é nada mais do que um bloco de notas, onde você escreve o seu código. Lá em cima só tem os botões de play/stop pra rodar e parar o seu script, e botões de criar um novo, salvar, abrir e exportar como aplicativo.

Pra testar isso, clique no Play (ou aperte Ctrl/Cmd+R), e o Processing já abre uma janelinha 100 x 100 pixels, com um fundo cinza. É uma das coisas que ele faz pra você, sem você ter escrito nada. Ótimo, mas queremos ter controle sobre isso. Feche a janelinha pra parar o programa, e escreva no editor:

    size(510, 510);
    background(#CCCCCC);

Essa função `size()` é o que define o tamanho da janela. Se você não definir isso, é como se tivesse escrito `size(100, 100);`, pois esses são os valores padrão da função `size()`. No caso, eu defini que a tela vai ter 510 x 510 pixels.

A função `background()` é o que define a cor do fundo. No caso eu coloquei um cinza em código hexadecimal, mas ele também aceita valores de vermelho, verde e azul (RGB) separados por vírgulas. Branco seria `background(255, 255, 255)`. Um valor único de 0 a 255 também é um jeito rápido de definir tons de cinza, sendo 0 preto e 255 branco. Aperte o Play pra ver se funcionou.

A próxima coisa que podemos fazer é desenhar formas básicas na tela…

    size(510, 510);
    background(#CCCCCC);
    ellipse(200, 100, 120, 60);
    rect(200, 200, 80, 80);
    line(100, 300, 400, 400);

O Processing tem muitas funções que criam formas geométricas, como `ellipse()` (elipse), `rect()` (retângulo) e `line()` (linha). Cada um tem sua sintaxe de entrada de dados que dizem como eles vão ser desenhados. Esses dados são os números entre parênteses.

No caso da elipse, temos que informar primeiro onde ela vai ser desenhada, e depois o seu tamanho. Então a sintaxe traduzida é `ellipse([coordenada x],[coordenada y], [largura], [altura])`. O mesmo serve pra desenhar o retângulo. As coordenadas da tela consideram o canto superior esquerdo como o ponto (0,0), e a unidade de tudo isso é pixels.

Uma linha é basicamente a união entre dois pontos. Então pra desenhar uma, basta informar as coordenadas x e y desses dois pontos. No caso, a linha que desenhamos vai do ponto (100, 300) ao ponto (400, 400).

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-7.29.47-PM.png)

Até agora não vimos nada de super emocionante, especialmente com essas formas básicas, com preenchimento branco e contorno preto. Seria melhor usar o MS Paint pra fazer isso!

Pra melhorar a aparência podemos mudar a cor do preenchimento e do contorno&#8230;

    size(510, 510);
    background(#CCCCCC);
    noFill();
    stroke(0, 0, 255);
    ellipse(200, 100, 120, 60);
    noStroke();
    fill(255, 0, 0);
    rect(200, 200, 80, 80);
    stroke(60, 150, 60);
    strokeWeight(3);
    line(100, 300, 400, 400);

O que fizemos aqui foi definir, pra cada forma criada, características de preenchimento e contorno. O compilador lê o código de cima pra baixo, e do jeito que está, termina o programa no final. Então isso é praticamente uma lista de instruções que estamos dando pra ele. E repare que no final de cada instrução, temos que incluir um ponto e vírgula.

Primeiro instruímos como vai ser o tamanho e a cor da tela. Depois dizemos que a próxima forma que ele desenhar não vai ter nenhum preenchimento (`noFill()`) e um contorno azul (`stroke(0, 0, 255)`). Aí ele desenha a elipse desse jeito, nas coordenadas e no tamanho definidos.

Depois dizemos que a forma seguinte não vai ter contorno (`noStroke()`), e o preenchimento vai ser vermelho (`fill(255, 0, 0)`). E aí ele desenha o retângulo com essas propriedades, e as coordenadas e tamanho também informados.

Por último, dizemos que o contorno vai ser um verde (`stroke(60, 150, 60)`), com 3 pixels de espessura (`strokeWeight(3)`). E aí ele faz a linha com essas propriedades, nas coordenadas informadas.

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-7.42.57-PM.png)

### Desenhando

Até agora não fizemos nada que o MS Paint não faça, então vamos continuar, e começar a ver como podemos usar essas formas pra criar ferramentas de desenho, e justificar mais o uso do Processing.

Pra simplificar, vou trabalhar só com uma elipse mesmo:

    size(510, 510);
    background(#333333);
    noFill();
    stroke(#FFFFFF);
    ellipse(255,255,100,100);

Repare que eu posicionei a elipse no centro da tela. Pra eu não ter que calcular o centro, posso aproveitar as variáveis pré-declaradas `width` (largura) e `height` (altura), pra se caso eu queira mudar o tamanho da tela, não tenho que voltar e recalcular a posição da elipse:

    size(510, 510);
    background(#333333);
    noFill();
    stroke(#FFFFFF);
    ellipse(width/2,height/2,100,100);

Isso já mostra como o Processing já oferece variáveis prontas pra serem usadas, economizando o tempo de termos que criar variáveis muito usadas.

Até agora, tudo que escrevemos foi uma lista de instruções pro compilador, em que ele lê linha por linha, e no final termina o programa. Mas pra haver qualquer tipo de mudança visual ao longo do tempo, precisamos de algum tipo de bloco de código que seja repetido a cada frame. Pra isso introduzimos duas funções essenciais, próprias do Processing: `setup()` e `draw()`.

Basicamente, a função `setup()` é rodada uma vez só, e é usada pra declarações iniciais como tamanho da tela, fundo etc. A função `draw()` é rodada em loop, uma vez a cada frame. O nosso código fica assim:

    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
    }
    void draw() {
      ellipse(width/2, height/2, 100, 100);
    }

Com isso, podemos fazer algum valor dentro de `draw()` variar a cada quadro. Isso pode ser a posição da elipse. Ela pode assumir a posição do cursor:

    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
    }
    void draw() {
      ellipse(mouseX, mouseY, 100, 100);
    }

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-7.49.04-PM.png)

Interessante ... Que tal fazer isso só quando o botão do mouse está pressionado ? Podemos usar a condicional `if(){}` e a variável do sistema `mousePressed`, pra dizer quando essas elipses vão ser desenhadas:

    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
    }
    void draw() {
      if (mousePressed){
        ellipse(mouseX, mouseY, 100, 100);
      }
    }

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-7.51.25-PM.png)

Isso traduz como: a cada frame, se o botão do mouse estiver pressionado, desenhe uma elipse na posição do cursor, com 100 pixels de largura e 100 pixels de altura.

Podemos também fazer com que o tamanho e a cor do contorno das elipses desenhadas varie aleatoriamente, e de acordo com a posição do cursor. Pra isso, temos que jogar a função `stroke()` pra dentro do draw, pra que ele mude a cada frame. Introduzimos também a função `random()`, pra sortear valores aleatórios pro tamanho das elipses. Assim:

    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
    }
    void draw() {
      if (mousePressed) {
        stroke(mouseX/2);
        ellipse(mouseX, mouseY, random(20,80), random(20,80));
      }
    }

Aqui, o valor de stroke é um cálculo, pra respeitar os valores aceitos pra cor (0 a 255). Se o cursor estiver na extrema direita da tela, esse valor vai ser dividido por 2, e retornar 255 como a cor do contorno da elipse.

Já o tamanho da elipse é definido por valores aleatórios (`random()`), entre 20 e 80, tanto pra largura quanto pra altura. Então a cada frame esses valores variáveis são recalculados, e uma nova elipse é desenhada na tela.

12 linhas de código e alguns rabiscos depois &#8230;

![]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-7.58.04-PM.png)

### Animando

Todas essas funções e variáveis como `stroke()`, `ellipse()`, `mousePressed`, `mouseX`, etc são próprias do Processing, e são o que tornam a linguagem pronta pra ser usada por quem trabalha com estruturas visuais. Repare que quando elas são escritas, o editor marca essas palavras em rosa, pra dizer que são palavras reservadas ao sistema. Mas muitas vezes, queremos definir as nossas próprias variáveis. Vou exemplificar com um cenário de um círculo animado:

    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
    }
    void draw() {
      ellipse(width/2, height/2, 30, 30);
    }

Eu quero que essa elipse ande 1 pixel pra direita a cada quadro. Pra isso, a posição x da elipse vai ser incrementada em 1 pixel a cada quadro. Precisamos de uma **variável** pra isso.

Pense em uma variável como uma gaveta que armazena um dado qualquer. O que está dentro da gaveta pode ser consultado e alterado. No caso, queremos uma gaveta que guarde um valor numérico, que a cada quadro vai ser incrementado uma unidade, e consultado pelo campo da posição x da elipse.

    float posX;
    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
      posX = width/2;
    }
    void draw() {
      ellipse(posX, height/2, 30, 30);
      posX = posX + 1;
    }

Aqui, criamos a variável `posX`, que vai armazenar o valor variável da posição x da elipse.

Pra começar, temos que declarar a variável, ou seja, dizer o tipo de dado que ela vai conter, e o seu nome. `float` é um tipo de dado próprio do sistema, e significa valores numéricos flutuantes (números inteiros e decimais). Outros tipos de dados do Processing podem ser `int` (números inteiros), `boolean` (verdadeiro/falso), `String` (sequência de caracteres alfanuméricos, representados entre aspas, como nomes e frases) etc. No caso, como a posição x do círculo poderá ser um número inteiro ou decimal, vamos usar `float` mesmo.

Segundo, é bom definir um valor inicial dessa variável. Isso é feito dentro do `setup()`, que é rodado uma vez na inicialização do programa.

Depois, dizemos que o valor da posição x da elipse vai ser o mesmo valor contido na variável `posX`. Isso é feito dentro do `draw()`, que roda em loop, uma vez a cada quadro.

Por último, incrementamos o valor de `posX` em uma unidade.

~[]({{ site.baseurl }}/assets/images/2013/03/Screen-Shot-2013-03-24-at-8.01.09-PM.png)

Beleza, mas eu não quero deixar esse rastro de círculos a cada quadro processado. Basta redefinir a cor do `background()`, dentro do `draw()`. Assim, a cada quadro, o programa pinta o fundo por cima de tudo e desenha o círculo na sua nova posição:

    float posX;
    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
      posX = width/2;
    }
    void draw() {
      background(#333333);
      ellipse(posX, height/2, 30, 30);
      posX = posX + 1;
    }

Agora, entendido como funcionam as variáveis, podemos incrementar um pouco mais esse programa. Vamos fazer com que a posição x do cursor defina a velocidade do círculo. Ao mesmo tempo, vamos fazer com que o círculo volte pro início da tela, se ele sair de vista:

    float posX;
    float velX;
    void setup() {
      size(510, 510);
      background(#333333);
      noFill();
      stroke(#FFFFFF);
      posX = width/2;
    }
    void draw() {
      background(#333333);
      velX = mouseX/10;
      ellipse(posX, height/2, 30, 30);
      if (posX > width) {
        posX = 0;
      }
      else {
        posX = posX + velX;
      }
    }

Aqui, introduzimos mais uma variável, `velX`, e definimos que ela vai ser a posição x do cursor dividido por 10 (pra limitar o incremento da posição x da elipse em até 51px por quadro).

Introduzimos uma condicional que vai cuidar do valor de `posX` assim: Se a elipse estiver em uma posição x maior do que a largura da tela, coloque-a de volta na esquerda da tela. Se não (`else{}`), incremente a posição x no valor que estiver na variável `velX` (definida pela posição x do cursor dividido por 10).

<video autoplay loop controls>
  <source src="{{ site.baseurl }}/assets/images/2013/03/Processing.mp4.mp4" type="video/mp4">
  <source src="{{ site.baseurl }}/assets/images/2013/03/Processing.oggtheora.ogv" type="video/ogg">
</video>

---

Isso é só pra riscar a superfície, e não gera muito resultado útil por si só. Mas entendendo a lógica de funcionamento de linguagens como o Processing, conseguimos ir descobrindo novas possibilidades através da experimentação que empurra o estudo. É importante se desafiar a cada etapa, e com isso ir aprendendo novas técnicas. Mesmo se o que você está escrevendo não tiver aplicação prática, entender e exercitar os conceitos de variáveis, funções, propriedades, métodos, classes, etc é crucial pra mergulhar em qualquer linguagem de programação, e o Processing é uma ótima porta de entrada pra quem se interessa em produzir suas próprias ferramentas visuais, e aproveitar o poder de processamento do computador.

O computador se tornou a ferramenta padrão de hoje em dia, mas muitas vezes esquecemos da sua capacidade de processar imensas quantidades de informação e executar cálculos complicadíssimos em frações de segundo. Isso pode ser aproveitado pra criar ferramentas únicas e peças gráficas complexas e sofisticadas, se soubermos falar a língua da máquina.

Pra estender o assunto, o próprio site do Processing é uma ótima referência, com o dicionário da sintaxe, bibliotecas e ferramentas pra criar qualquer coisa, seja pra web, instalações interativas, animações, etc. Comece por lá.
