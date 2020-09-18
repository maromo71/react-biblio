# Biblioteca 
## Exemplo React App

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app). Como Banco de Dados Realtime foi utilizado o firebase [Firebase Datbase](https://firebase.google.com/docs/).

Para estilização foi utilizado o [Bootstrap React Framework](https://react-bootstrap.github.io/).

Por razões de segurança foi omitido o arquivo de configuração do firebase. Abaixo colo o código sem a apiKey e os caminhos.

### Arquivo firebaseConn.js
<br>
import firebase from 'firebase/app'; <br>
import 'firebase/database';<br>
 <br>
<br>
let firebaseConfig = {<br>
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",<br>
    authDomain: "xxxxxxxxxxx.firebaseapp.com",<br>
    databaseURL: "https://xxxxxxxxx.firebaseio.com",<br>
    projectId: "xxxxxxxxxxxxxxx",<br>
    storageBucket: "xxxxxxxxxx-app.appspot.com",<br>
    messagingSenderId: "xxxxxxxxxxx",<br>
    appId: "xxxxxxxxxxxxxxxxxxxx"<br>
};<br>
<br>
if (!firebase.apps.length) {<br>
    firebase.initializeApp(firebaseConfig);<br>
}<br>
export default firebase;<br>
<br>
<br>
Prof. Marcos Roberto de Moraes<br>
Fatec Mogi Mirim






