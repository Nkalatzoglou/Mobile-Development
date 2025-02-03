import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');

const Box = ({ value, borders }) => {
  return (
    <View style={[styles.box, borders]}>
      <Text style={styles.boxText}>{value}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Naughts and Crosses</Text>
        <View style={styles.row}>
          <Box value="O" borders={styles.topLeftBox} />
          <Box value="X" borders={styles.topBox} />
          <Box value="O" borders={styles.topRightBox} />
        </View>
        <View style={styles.row}>
          <Box value="X" borders={styles.leftBox} />
          <Box value="O" borders={styles.centerBox} />
          <Box value="X" borders={styles.rightBox} />
        </View>
        <View style={styles.row}>
          <Box value="O" borders={styles.bottomLeftBox} />
          <Box value="X" borders={styles.bottomBox} />
          <Box value="O" borders={styles.bottomRightBox} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const boxSize = width / 3 - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: boxSize,
    height: boxSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  boxText: {
    fontSize: boxSize / 2,
    fontWeight: 'bold',
  },
  topLeftBox: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  topBox: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  topRightBox: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#000',
  },
  leftBox: {
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#000',
  },
  centerBox: {
    borderWidth: 2,
    borderColor: '#000',
  },
  rightBox: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  bottomLeftBox: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  bottomBox: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#000',
  },
  bottomRightBox: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#000',
  },
});

export default App;
