/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation/AppNavigator';
import {name as appName} from './app.json';
import Storage from "./src/Model/LocalStorage";

const cleanStorageWhenInitiateApp = () => {
    Storage.clearMap()
}
cleanStorageWhenInitiateApp()

AppRegistry.registerComponent(appName, () => App);
