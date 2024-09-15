import { settingsAtom } from '@/atoms';
import { useAtom } from 'jotai';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  const [settings] = useAtom(settingsAtom);

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: settings?.theme ? settings?.theme[settings?.chosenTheme].background : '#232323',
    },
    text: {
      color: settings?.theme ? settings?.theme[settings?.chosenTheme].color : '#FEFEFE',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>placeholder text for settings</Text>
    </View>
  );
};
