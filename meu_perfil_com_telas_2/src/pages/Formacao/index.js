import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { styles } from "../../../styles";

const Formacao = () => {
  const char = "-";

  return (
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/70/772/png-transparent-vimeo-computer-icons-logo-short-film-vitag-svg-miscellaneous-television-text-thumbnail.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} Impacta - Produção Múltimidia</Text>
        <Text style={styles.text}>{char} FIAP - Sistemas para Internet</Text>
      </View>
    </ScrollView>
  );
};

export default Formacao;
