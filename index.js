/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native/tvos-types.d';

AppRegistry.registerComponent(appName, () => App);
