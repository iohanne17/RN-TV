import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Platform} from 'react-native';
import bladeImg from './assets/blade.jpg';
import lxgImg from './assets/lxg.jpeg';
import PressableButton from './src/components/TouchableButton';
import {init} from '@noriginmedia/norigin-spatial-navigation';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';

init({
  // options
});

const val = 300;
const DATA = [
  {
    name: 'Blade Vampire Hunter',
    image:
      Platform.OS === 'web' ? {uri: bladeImg} : require('./assets/blade.jpg'),
  },
  {
    name: 'League of Extraordinary Gentlemen',
    image: Platform.OS === 'web' ? {uri: lxgImg} : require('./assets/lxg.jpeg'),
  },
];
const App = () => {
  const focusKey_ = 'RN-MOVIE';
  const {ref, focusSelf, focusKey, setFocus} = useFocusable({
    trackChildren: true,
    focusKey: focusKey_,
  });

  useEffect(() => {
    setFocus(focusKey_);
  }, [focusSelf, setFocus]);

  const onClicked = (index: number, focused: boolean) => {
    console.log('i am clicked', index, focused);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <FocusContext.Provider value={focusKey}>
          <View style={styles.otherContainer} ref={ref}>
            {DATA &&
              DATA.length > 0 &&
              DATA.map((el, idx) => {
                return (
                  <PressableButton
                    focusKey={`${el.name}${idx}`}
                    title={el.name}
                    source={el.image}
                    key={idx}
                    onPress={onClicked}
                    index={idx}
                  />
                );
              })}
          </View>
        </FocusContext.Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
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
