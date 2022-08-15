import {Platform} from 'react-native';
import bladeImg from './blade.jpg';
import lxgImg from './lxg.jpeg';

export const BLADEIMG =
  Platform.OS === 'web' ? {uri: bladeImg} : require('./assets/blade.jpg');
export const LXGIMG =
  Platform.OS === 'web' ? {uri: lxgImg} : require('./assets/lxg.jpeg');
