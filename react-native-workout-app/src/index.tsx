import App from './App';
import { AppRegistry } from 'react-native';
import * as serviceWorker from './serviceWorker';

// register the component
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    initialProps: {},
     rootTag: document.getElementById('root') 
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

