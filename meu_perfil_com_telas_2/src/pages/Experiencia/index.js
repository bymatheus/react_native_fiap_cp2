import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { styles } from "../../../styles";

const Experiencia = () => {
  const char = "-";

  return (
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image
            source={{
              uri: "https://entirelyextreme.com/wp-content/uploads/2018/08/foundation-logo.png?ezimgfmt=rs:362x362/rscb1/ng:webp/ngcb1",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
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

export default Experiencia;
