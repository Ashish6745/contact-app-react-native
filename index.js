/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContextApi from './contextAPI/ContextApi';
import 'react-native-gesture-handler';
const Contacts = () => {
    return(
        <ContextApi>
        <App />
        </ContextApi>
    )
}

AppRegistry.registerComponent(appName, () => Contacts);
