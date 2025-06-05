# react-native-bcc - PocketCards

Aplicativo mobile desenvolvido em **React Native** com foco em simular uma loja de cartas colecionáveis. O objetivo principal é oferecer uma interface simples e funcional para manter o usuário confortável enquanto utiliza o app.


## (I) Ideia

A proposta do projeto é criar uma plataforma para a loja fictícia **PocketCards**, feita para vender todo tipo de carta colecionável, incluindo Pokemon, Digimon, etc.


## (II) Objetivo

#### Oferecer uma interface responsiva, intuitiva e adaptada para o uso infantil e adulto.

## (III) Funcionamento

- Inicialmente apresenta duas telas, de Login caso possuir uma conta existente, e de Cadastro, oferecendo um formulário para nome, usuário, email e senha.
- Navegação personalizada, apresentando Home e Perfil.
- A interface é adaptada para **uso tátil simplificado** (botões grandes, feedback visual claro).

## (IV) Tecnologias Utilizadas

- **React Native**: framework base para desenvolvimento mobile.
- **TypeScript**: linguagem principal utilizada.  
- **Firebase**: backend para armazenamento de dados, autenticação e sincronização.
- **React Navigation**: gerenciamento de rotas entre telas.
- **AsyncStorage**: persistência local de dados (frases favoritas ou recentes).
- **Styled Components**: estilização com componentes reutilizáveis.

---

## (V) Instalação

```bash
git clone https://github.com/vinczken/react-native-bcc.git
cd react-native-bcc
```


```bash
npm install --force
npx expo start
```
--force pela biblioteca de icons **Iconoir** estar desatualizada.
