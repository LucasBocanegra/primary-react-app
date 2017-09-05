#  Resumo documenção React

React é uma biblioteca javascript que utiliza sintax ES6 para escrever código javascript. Um exemplo simples de como fazer um "hello world" usando react segue abaixo:

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

```
## JSX

_syntax extension to Javascript_ é uma forma de descrever elementos de UI, produzindo React elements

```javascript

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

```

## React elements

São a menor unidade de bloco, construída com React. React elements são objetos simples e sãõ fáceis de serem criados. Elementos são do que os componentes são feitos.
React elements são imutáveis

## Componentes e Props

Componentes dividem seu UI em pedaços independentes e reusáveis. Conceitualmente, componentes são como funções javascript. Componentes aceitam argumentos(chamados de props), utilizando-os para descrever elementos na tela. Um exemplo de declaração de componente.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Entretanto, uma forma equivalente a mais comulmente utilizada para definir componentes é a usada em ES6.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Estado e Ciclo de vida



## List and Keys

Em react listas são iteradas usando `maps`. Segue um exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

O exemplo acima gera a seguinte saída `[2, 4, 6, 8, 10]`.
É possível renderizar a lista dentro de componentes. Para listas não ordenadas é recomendado
utilizar um elemento chave para indetificar o componente, como por exemplo:

```javascript
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Em linhas gerais pode-se usar a regra: Quando um componente é renderizado dentro de um map, é necessário colocar uma key em cada elemento.
Keys servem para entendimento do React, portanto, elas não são passadas
para elementos filhos

```javascript
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

> Keys devem ser unicas em elementos irmãos, entretanto não precisam ser unica globalmente. Componentes podem ter key identicas desde que 
> respeitem a regra

## Formulários

Muitas vezes queremos interceptar submissão de um formulário para manipular os dados. Em React combinamos o formulário com o estado de um componente. Dessa forma, um componente que renderiza um formulário também controla o que acontece no formulário e subsequentemente na entrada dos daodos pelo usuário.

## Lifting state up