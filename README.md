# NubbleApp - Coffstack

<p>Aplicação criada do zero até a publicação, seguindo a mentoria de <a href='https://github.com/LucasGarcez' target='_blank'>@LucasGarcez</a> no curso <a href='https://coffstack.com.br/' target='_blank'>Profissional React Native</a>. Tem como objetivo por na prática como é feito o desenvolvimento com React Native diretamente de sua CLI. Utilizando técnicas condizentes com o mercado, este é um app que engloba tudo que um desenvolvedor profissional precisa para uma carreira sólida. O app é uma alusão ao Instagram.</p>

- [Figma](https://www.figma.com/design/qZVdIhrBpXhyZCPhy1WfAh/App---Nubble-(v.1.1)?node-id=0-1&t=UCqKWIqt6mvrfYjk-0)

## Tecnologias utlizadas 
- [React](https://react.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Shopify Restyle](https://shopify.github.io/restyle/)
- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)


# Dependências de desenvolvimento

- [Husky](https://typicode.github.io/husky/)
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)

- [nubble-app-api](https://github.com/LucasGarcez/nubble-app-api)

<p>Atualmente o projeto está utilizando a branch <i>backend-v1</i> da API</p>

## Plugins

- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)


# Como inicializar o projeto

<p>Você vai precisar de um ambiente configurado corretamente que contenha:</p>
<p>• Git</p>
<p>• Yarn ou NPM</p>
<p>• Android Studio ou XCode</p>
<p>• Editor de texto - Vscode ou outro de sua preferência</p>


```bash
# Clone o repositório
$ git clone
```
```bash
# Entre no diretório
$ cd NubbleApp
```
```bash
# Instale as dependências
$ yarn / npm install
```
```bash
# Inicie o projeto
$ yarn start / npm start
```

### Configurando o .env no typescript

<span>Será necessário criar o aquivo .env seguindo as diretrizes no env.d.ts. Nele você terá que configurar conforme seus dados respectivamente.</span>

[.env no typescript](https://dev.to/bhatvikrant/how-to-add-environment-variables-in-a-react-native-project-with-ts-2ne5)

<span>Em alguns casos, após finalizar a configuração do .env, seu projeto pode retornar as variáveis como <i>undefined</i>, caso isso ocorra, tente reiniciar o Metro Bundler </span>

```bash
#Reinicie o metro Bundler

$ npx react-native start --reset-cache

```

