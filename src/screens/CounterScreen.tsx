import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

  return (
      <View style={ styles.container }>
          <Text style={ styles.title }>Counter: {counter}
          </Text>

          <Fab 
            title="-1"
            onPress={() => setCounter(counter - 1)}
            position='left'
          />

          <Fab 
            title="+1"
            onPress={() => setCounter(counter + 1)}
            position='right'
          />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -15,
        color: 'black'
    }
})
