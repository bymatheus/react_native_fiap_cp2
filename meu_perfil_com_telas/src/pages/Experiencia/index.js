import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../../../styles";

export default function Experiencia() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Formação</Text>
      <Button title="Abrir menu" onPress={() => navigation.toggleDrawer()} />
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} BTech - Designer Digital</Text>
        <Text style={styles.text}>
          {char} Consultamais - Desenvolvedor Front End
        </Text>
        <Text style={styles.text}>
          {char} Consultamais - Desenvolvedor Back End
        </Text>

        <Text style={styles.text}>
          {char} ReclameNet - Arquiteto de Software
        </Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>
          {char} Consultamais: E-commerce de serviços
        </Text>
        <Text style={styles.text}>
          {char} Reclamenet: SaaS com soluções para consumidores
        </Text>
        <Text style={styles.text}>
          {char} MplusC: Projeto pessoal, software house
        </Text>
      </View>
    </View>
  );
}
