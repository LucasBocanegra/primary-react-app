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


