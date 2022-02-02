import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

  return (
      <View style={ styles.container }>
          <Text style={ styles.title }>Counter: {counter}
          </Text>

          <TouchableOpacity
            onPress={() => setCounter(counter + 1)}  
          >
            <View style={ styles.buttonIncrease }>
                <Text>+1</Text>
            </View>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    buttonIncrease: {
        backgroundColor: 'red',
        borderRadius: 100
    }
})
