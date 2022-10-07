import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { styles } from "../../../styles";

const Pessoal = () => {
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
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Matheus Camargo Xavier</Text>
        <Text style={styles.text}>{char} 27 anos</Text>
      </View>
    </ScrollView>
  );
};

export default Pessoal;
