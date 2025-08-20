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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('this is log new');
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello react native world</Text>
      <Text>This is a new app </Text>
      <Text>And this codepush poc test 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default codePush(App);
