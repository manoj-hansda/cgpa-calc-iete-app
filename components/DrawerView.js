import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Container, Content, H1, H3 } from 'native-base';

import OptionsMenu from './OptionsMenu';

const DrawerLayout = () => (
  <Container>
    <Content>
      <View>
        <Image
          source={require('../assets/drawer-banner.png')}
          style={styles.bannerImg} 
        />
        <View style={styles.bannerText}>
          <H1 style={styles.headings}>CGPA Calculator</H1>
          <H3 style={styles.headings}>for IETE</H3>
          <Text style={[styles.headings, styles.ver]}>version 0.1.0</Text>
        </View>
      </View>
      <OptionsMenu />
    </Content>
  </Container>
);

export default DrawerLayout;

const styles = StyleSheet.create({
    bannerImg: {
        width: 300,
        height: 150,
        opacity: 0.9
    },
    bannerText: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 100, 0, 0.5)',
    },
    headings: {
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 1,
    },
    ver: {
        marginTop: 5,
    }
});
