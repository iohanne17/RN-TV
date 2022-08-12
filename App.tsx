import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Pressable,
  Alert,
} from 'react-native';
import bladeImg from './assets/blade.jpg';

const val = 300;
const DATA = [
  {
    name: 'Blade Vampire Hunter',
    image:
      Platform.OS === 'web' ? {uri: bladeImg} : require('./assets/blade.jpg'),
  },
  {
    name: 'League of Gentlemen',
    image:
      Platform.OS === 'web' ? {uri: bladeImg} : require('./assets/lxg.jpeg'),
  },
];
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.otherContainer}>
          {DATA &&
            DATA.length > 0 &&
            DATA.map((el, idx) => {
              return (
                <Pressable
                  style={styles.box}
                  key={`${idx}`}
                  onPress={() => Alert.alert(`I am ${el.name}`)}>
                  <Image style={styles.image} source={el.image} />
                  <Text style={styles.title}>{el.name}</Text>
                </Pressable>
              );
            })}
        </View>
      </View>
    </SafeAreaView>
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
  },
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
