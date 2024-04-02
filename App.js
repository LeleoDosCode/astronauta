import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagens} 
        source={require('./assets/ast.jpg')}
      />
      <Text>Este é um pequeno passo para o homem, mas um gigantesco salto para a humanidade</Text>
      <StatusBar style="auto" />
    </View>
  );
};
