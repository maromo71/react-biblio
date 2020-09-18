# Biblioteca 
## Exemplo React App

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app). Como Banco de Dados Realtime foi utilizado o firebase [Firebase Datbase](https://firebase.google.com/docs/).

Para estilização foi utilizado o [Bootstrap React Framework](https://react-bootstrap.github.io/).

Por razões de segurança foi omitido o arquivo de configuração do firebase. Abaixo colo o código sem a apiKey e os caminhos.

### Arquivo firebaseConn.js

import firebase from 'firebase/app';
import 'firebase/database';
 

let firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxx-app.appspot.com",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxx"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;


Prof. Marcos Roberto de Moraes
Fatec Mogi Mirim






