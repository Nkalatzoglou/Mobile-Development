import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {

  const [answerValue, setAnswerValue] = useState(0);
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [memoryValue, setMemoryValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState('');

  const handleNumber = (number) => {
    if (readyToReplace) {
      setReadyToReplace(false);
      return number;
    } else {
      return parseFloat(`${answerValue}${number}`);
    }
  };

  const calculateEquals = () => {
    const previous = parseFloat(memoryValue);
    const current = parseFloat(answerValue);
    let result;

    switch (operatorValue) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case 'x':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        return current;
    }

    return parseFloat(result.toFixed(4));
  };

  const buttonPressed = (value) => {
    console.log(`Button pressed: ${value}`);
    if(!isNaN(value)){
      const number = parseFloat(value);
      setAnswerValue(handleNumber(number));
    }
    else if (value === 'C') {
      setAnswerValue(0);
      setMemoryValue(0);
      setOperatorValue('');
      setReadyToReplace(true);
    }
    else if (value === '+/-') {
      setAnswerValue((currentValue) => currentValue * -1);
    }
    else if (['+', '-', 'x', '/'].includes(value)) {
      let newMemoryValue = answerValue;
      if (operatorValue !== '') {
        newMemoryValue = calculateEquals();
      }
      setMemoryValue(newMemoryValue);
      setReadyToReplace(true);
      setOperatorValue(value);
    }
    else if (value === '=') {
      const result = calculateEquals();
      setMemoryValue(0);
      setReadyToReplace(true);
      setAnswerValue(result);
    }
    else {
      setAnswerValue(answerValue * 0.01);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.resultBox}>
          <Text style={styles.result}>{answerValue}</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('C')}>
            <Text style={styles.blackButtonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('+/-')}>
            <Text style={styles.blackButtonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() => buttonPressed('%')}>
            <Text style={styles.blackButtonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('/')}>
            <Text style={styles.whiteButtonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('7')}>
            <Text style={styles.whiteButtonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('8')}>
            <Text style={styles.whiteButtonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('9')}>
            <Text style={styles.whiteButtonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('x')}>
            <Text style={styles.whiteButtonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('4')}>
            <Text style={styles.whiteButtonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('5')}>
            <Text style={styles.whiteButtonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('6')}>
            <Text style={styles.whiteButtonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('-')}>
            <Text style={styles.whiteButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('1')}>
            <Text style={styles.whiteButtonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('2')}>
            <Text style={styles.whiteButtonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('3')}>
            <Text style={styles.whiteButtonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('+')}>
            <Text style={styles.whiteButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.longButton} onPress={() => buttonPressed('0')}>
            <Text style={styles.longButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkGreyButton} onPress={() => buttonPressed('.')}>
            <Text style={styles.whiteButtonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton} onPress={() => buttonPressed('=')}>
            <Text style={styles.whiteButtonText}>=</Text>
          </TouchableOpacity>
        </View>
        
        <StatusBar barStyle="light-content" />
      </View>
    </SafeAreaView>
  );
}

const buttonSize = width / 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  resultBox: {
    width: width,
    marginRight: width * 0.25
  },
  result: {
    color: 'white',
    fontSize: width * 0.15,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greyButton: {
    backgroundColor: '#a6a6a6',
    margin: width * 0.01,
    height: buttonSize,
    width: buttonSize,
    borderRadius: width * 0.2,
    justifyContent: 'center',
  },
  blackButtonText: {
    color: 'black',
    fontSize: width * 0.08,
    textAlign: 'center',
  },
  whiteButtonText: {
    color: 'white',
    fontSize: width * 0.08,
    textAlign: 'center',
  },
  darkGreyButton: {
    backgroundColor: '#333333',
    margin: width * 0.01,
    height: buttonSize,
    width: buttonSize,
    borderRadius: width * 0.2,
    justifyContent: 'center',
  },
  blueButton: {
    backgroundColor: '#0984e3',
    margin: width * 0.01,
    height: buttonSize,
    width: buttonSize,
    borderRadius: width * 0.2,
    justifyContent: 'center',
  },
  longButton: {
    backgroundColor: '#333333',
    margin: width * 0.01,
    height: buttonSize,
    width: 2*buttonSize,
    borderRadius: width * 0.2,
    justifyContent: 'center',
    textAlign: 'left'
  },
  longButtonText: {
    marginLeft: width * 0.07,
    color: 'white',
    fontSize: width * 0.08,
    textAlign: 'left',
  },
});
