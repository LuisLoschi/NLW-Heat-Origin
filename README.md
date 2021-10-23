<h1 align="center">
  [NLW/Heat - Missão Origin] Projeto crachá virtual DoWhile 2021 
</h1>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#aulas">Aulas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>
  
<div align="center">  
  <img height=200 width=800 src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdc210504-4c90-419e-86e0-f8df987acb9a%2FCapa_-_Notion_4.png?table=block&id=00a89e06-c0b7-412b-b6da-f435243df92d&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2" />
</div>
  
## 🚀 <a name="tecnologias">Tecnologias</a>
Projeto desenvolvido utilizando as seguintes tecnologias:
- HTML
- CSS
- JavaSCript

Ambientes Utilizados
- [Google Chrome](https://www.google.com/intl/pt-BR/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)

## 💻  <a name="projeto">Projeto</a>
Layout de uma aplicação onde as pessoas podem gerar seu crachá para participar do evento. É uma aplicação simples que visa ensinar os fundamentos da programação para quem está no início da jornada.

<div align="center">
  <img src="img/card.png" />
</div>

## 🔖 <a name="layout">Layout</a>
Você também pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1031698737363668691). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## 📚 <a name="aulas">Aulas</a>
<details>
  <summary>Aula 1</summary>
  <br />
  Uma breve abordagem sobre Soft skills, trazendo 3 propostas principais:
  - Aprender diariamente e com eficiência;
  - Dominar a tecnologia que deseja trabalhar;
  - Ter um posicionamento estratégico no mercado;

  E também uma breve abordagem sobre Hard skills, apresentando:
  - Fundamentos da programação WEB;
  - Front-end;
  - Explicação breve da estrutura HTML e CSS;
</details>

---

<details>
  <summary>Aula 2</summary>
  <br /> 
  Foi finalizado toda a parte visual da aplicação.

  Foi estudado conceitos mais abrangentes de HTML e CSS, onde foi ensinado:
  - O que é HTML? Hyper Text Markup Language, sua principal função é montar a estrutura do código;
  - Tags, sua anatomia e alinhamento;

  <br />

  - O que é CSS? Cascading Style Sheets, sua principal função é montar a parte visual do código;
  - Seletores e anatomia;
  - Specificity, voltada para hierarquia de seletores, sendo sua ordem: 
    - inline styles '<>' 
    - IDs '#' 
    - Classes, atributos e pseudo-classes '.class' 
    - Elementos e pseudo-elementos 'h1' ':before'
  - Unidades de medida e Responsividade;
    - Usando unidades rem e pixel;
  - Box Model;
    - conceitos de margin, border e padding;
  - Layout;
</details>
  
---

<details>
  <summary>Aula 3</summary>
  <br /> 
  
  Nessa aula foi ensinado JavaScript criando ações na aplicação e conhecendo boas práticas usadas pelo mercado de trabalho.
  - Javascript: Sua função é conferir elementos dinâmicos as páginas WEB.
  - Fluxo natural da aplicação: Faz a leitura do código linha por linha, da esquerda para direita e suas instruções são executadas na ordem em que aparecem no código.
  - Tipo de dados primitivos:
    - String: Dado de texto. Deve ser declarado entre aspas (duplas ou simples).
    - Number: Dado de número, para realizar operações.
    - Boolean: São os valores lógicos true (verdadeiro) ou false (falso).
  - Variáveis:
    - let: variável poderá mudar de valor.
    - const: variável não poderá mudar de valor.
  - Sobre boas práticas:
    - Escrever as variáveis e funções em inglês que tenha sentido, com nomes curtos, descritivos e intuitivosr.
    - Estilos de escritas: `camelCase` `PascalCase` `snake_case`.
  - Tipos de dados estruturados:
    - Funções
      - criar sequência de passos para aplicação
      - executar sequência
      - Propriedades e Funcionalidades
        - Atributos e Métodos
      ``` javascript
      //Exemplo de função
      function nomeDaFunção(parametro) {
        Comandos;
      }
      
      //Chamando a função para executar
      nomeDaFunção(parametro)    
      ```
  
  - Objetos: É um conjunto de dados onde uma única variável é usada para atribuir dados, exemplo:
    ``` javascript
    const obj = { 
      dado1: "value1", 
      dado1: "value2"
      //Pode acrescentar mais dados seguindo essa estrutura
    }
    ```
  - Repetições (loop):
    - for: É um código que vai ser repetindo até que uma determinada condição seja alcançada,  exemplo:
    ``` javascript
    for (let i = 0; i <= NumeroDeRepetições; i++) {}
    ```
  - DOM (Document Object Model): Permite que navegadores e scripts possam manipular o conteúdo de uma página web, mapeando cada elemento do html como um objeto.
    ``` javascript
    //Usa-se document para acessar o elemento;
    //textContent retorna todos os elementos de um nó;
                                           
    //Acessando o elemento pela classe
    document.getElementsByClassName('class').textContent = 'newValue'
  
    // No caso do id, podemos escrever da seguinte forma:
    id.textContent = 'newValue'                                  
    ```                                                                                 
  - Outros atributos:
    - href: pega o link da tag <a>;
    - class: pega a classe do elemento;
    - children: pega o filho do elemento, exemplo:
    ``` html
    <div class="pai">
      <div class="filho"></div>
    </div>
    ```                                     
</details>
  
---

## 📝 <a name="licença">Licença</a>
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
