import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>my name is</Text>
        <View style={styles.whiteBox}>
          <Text style={styles.whiteBoxText}>Nick 😊 (he/him)</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'light gray',
  },
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  whiteBox: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 10,
  },
  whiteBoxText: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
