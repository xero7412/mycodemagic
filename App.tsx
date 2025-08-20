/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import codePush from '@revopush/react-native-code-push';

let App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('this is log new');
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello react native world</Text>
      <Text>This is a new app </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
App = codePush(App);
export default App;
