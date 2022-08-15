import {Platform, Image} from 'react-native';
import bladeImg from './blade.jpg';
import lxgImg from './lxg.jpeg';

export const BLADEIMG =
  Platform.OS === 'web'
    ? {uri: bladeImg}
    : {uri: Image.resolveAssetSource(bladeImg).uri};
export const LXGIMG =
  Platform.OS === 'web'
    ? {uri: lxgImg}
    : {uri: Image.resolveAssetSource(lxgImg).uri};
