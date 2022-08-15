/* eslint-disable no-alert */
import React, {Fragment, useState} from 'react';
import {Text, StyleSheet, Image, Platform, Pressable} from 'react-native';
import {useFocusable} from '@noriginmedia/norigin-spatial-navigation';

interface ButtonProps {
  title: string;
  source: any;
  onPress?: (t: number, f: boolean) => void;
  focusKey: string;
  index: number;
}

const buttonSize = 150;

const TouchableButton = ({
  source,
  title,
  onPress,
  focusKey,
  index,
}: ButtonProps) => {
  const [selectedIndex, setselectedIndex] = useState<undefined | number>(
    undefined,
  );
  const {ref, focused, focusSelf} = useFocusable({
    focusKey,
    onBlur: () => setselectedIndex(undefined),
  });

  const props =
    Platform.OS === 'web'
      ? {
          onPressIn: () => {
            onPress && onPress(index, focused);
            if (focused) {
              setselectedIndex(index);
            }
          },
        }
      : {
          onPress: () => {
            onPress && onPress(index, focused);
            if (focused) {
              setselectedIndex(index);
            }
          },
        };
  const isClicked = focused && index === selectedIndex;

  return (
    <Pressable
      ref={ref}
      onFocus={focusSelf}
      style={focused ? styles.buttonFocused : styles.box}
      {...props}>
      <Fragment>
        <Image
          source={source}
          style={focused ? styles.focusedImage : styles.image}
        />
        {isClicked && (
          <Text adjustsFontSizeToFit={true} style={styles.title}>
            {title}
          </Text>
        )}
      </Fragment>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 5,
    opacity: 0.5,
    ...(Platform.OS !== 'web' ? {flex: 1} : {}),
  },
  buttonFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'green',
    backgroundColor: 'white',
    padding: 8,
    marginHorizontal: 5,
    elevation: 8,
    zIndex: 100,
    opacity: 1,
    ...(Platform.OS !== 'web' ? {flex: 1} : {}),
  },
  image: {
    height: buttonSize,
    width: buttonSize - 20,
    backgroundColor: 'white',
    resizeMode: 'cover',
    marginBottom: 60,
    ...Platform.select({
      web: {
        height: buttonSize + 120,
        width: buttonSize + 120 - 20,
      },
    }),
  },
  focusedImage: {
    height: buttonSize + 160,
    width: buttonSize - 20,
    backgroundColor: 'white',
    resizeMode: 'cover',
    marginBottom: 60,
    ...Platform.select({
      web: {
        height: buttonSize + 120,
        width: buttonSize + 120 - 20,
      },
    }),
  },
  title: {
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TouchableButton;
