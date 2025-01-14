import { View, StyleSheet } from 'react-native';
import { Content } from '@/components';
import { useAtom } from 'jotai';
import { settingsAtom } from '@/atoms';

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
      <Content />
    </View>
  );
}
