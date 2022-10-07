import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../../../styles";

export default function Pessoal() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pessoal</Text>
      <Button title="Abrir menu" onPress={() => navigation.toggleDrawer()} />
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados</Text>
        <Text style={styles.text}>{char} Matheus Camargo Xavier</Text>
        <Text style={styles.text}>{char} 27 anos</Text>
      </View>
    </View>
  );
}
