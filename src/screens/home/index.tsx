import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TVEventControl,
  BackHandler,
  Platform,
} from 'react-native';
import PressableButton from '../../components/TouchableButton';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import {BLADEIMG, LXGIMG} from '../../../assets';

const val = 300;
const DATA = [
  {
    name: 'Blade Vampire Hunter',
    image: BLADEIMG,
  },
  {
    name: 'League of Extraordinary Gentlemen',
    image: LXGIMG,
  },
];

const App = () => {
  const [selectedIndex, setselectedIndex] = useState<undefined | number>(
    undefined,
  );
  const focusKey_ = 'RN-MOVIE';
  const {ref, focusSelf, focusKey, setFocus} = useFocusable({
    trackChildren: true,
    focusKey: focusKey_,
  });

  const handleBackButtonClick = useCallback(() => {
    setFocus('---');
    return null;
  }, [setFocus]);

  useEffect(() => {
    if (Platform.isTV) {
      TVEventControl.enableTVMenuKey();
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    }

    return () => {
      if (Platform.isTV) {
        TVEventControl.disableTVMenuKey();
        BackHandler.removeEventListener(
          'hardwareBackPress',
          handleBackButtonClick,
        );
      }
    };
  }, [handleBackButtonClick]);

  useEffect(() => {
    setFocus(focusKey_);
  }, [focusSelf, setFocus]);

  const onPressed = (index: number, focused: boolean) => {
    console.log('i am clicked', index, focused);
    setselectedIndex(index);
  };

  const onBlur = () => {
    setselectedIndex(undefined);
  };

  return (
    <View style={styles.container}>
      <FocusContext.Provider value={focusKey}>
        <View style={styles.otherContainer} ref={ref}>
          {DATA &&
            DATA.length > 0 &&
            DATA.map((el, idx) => {
              const isClicked = selectedIndex === idx;

              return (
                <PressableButton
                  focusKey={`${el.name}${idx}`}
                  title={el.name}
                  source={el.image}
                  key={idx}
                  onPress={onPressed}
                  index={idx}
                  isClicked={isClicked}
                  onBlur={onBlur}
                />
              );
            })}
        </View>
      </FocusContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  notFocusedContainer: {backgroundColor: 'yellow', flexDirection: 'row'},
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 10,
  },
  image: {
    height: val,
    width: val - 20,
    backgroundColor: 'white',
    resizeMode: 'stretch',
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 18,
  },
});

export default App;
