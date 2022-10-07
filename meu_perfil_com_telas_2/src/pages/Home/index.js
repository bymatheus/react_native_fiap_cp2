import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { styles } from "../../../styles";

const Home = () => {
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
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} Impacta - Produção Múltimidia</Text>
        <Text style={styles.text}>{char} FIAP - Sistemas para Internet</Text>
      </View>
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
    </ScrollView>
  );
};

export default Home;
