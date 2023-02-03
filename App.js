import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/start-game-screen';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
