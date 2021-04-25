import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useNavigation from './hooks/useNavigate';

export default function App() {
  const [path, addPath] = useNavigation();

  function navigation(params: number) {
    addPath(params);
    console.log(path);
  }

  return (
    <View style={styles.container}>
      <Text>Hooks personalizado</Text>

      <TouchableOpacity onPress={() => navigation(Math.random() * 100)}>
        Click
      </TouchableOpacity>

      <View>
        {path.map((item) => (
          <Text>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
