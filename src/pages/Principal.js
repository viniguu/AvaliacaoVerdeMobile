import React from 'react';
import { StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView, Text, View } from 'react-native';
import logo from '../components/img/imgg/logo.png';
import logouninassau from '../components/img/imgg/logouninassau.png';
import viaparque from '../components/img/imgg/viaparque.jpg';

const Header = () => {
    return (
        <SafeAreaView style={styles.containerlogos}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logocentral} />
                <Image source={logouninassau} style={styles.logodireita} />
            </View>
        </SafeAreaView>
    )
}

export default function Principal() {
    return (
        <ImageBackground source={viaparque} style={styles.background}>
            <View style={styles.container}>
                <Header />
                <ScrollView>
                        <Text style={styles.cabecalho}>Qual é o nosso objetivo?</Text>
                        <Text style={styles.texto1}>O objetivo da pesquisa é analisar os impactos e benefícios da Via Parque em Caruaru, investigando seu efeito no trânsito, mobilidade, desenvolvimento econômico e qualidade de vida. Também avaliaremos as políticas públicas e investimentos associados a ela, identificando desafios e oportunidades para melhorias na gestão urbana e no desenvolvimento sustentável da cidade.</Text>
                    <Text style={styles.Letra}>
                    </Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        opacity:0.5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
    },
    background: {
        flex: 1,
    },
    logocentral: {
        width: 70,
        height: 100,
        marginLeft: 170
    },
    logodireita: {
        width: 100,
        height: 50,
        marginLeft: 70,
        marginTop: 20,
    },
    containerlogos: {
        alignItems: 'center',
        justifyContent: 'center'
    },
corfundo:{
    backgroundColor:'#fff'
},
    cabecalho:{
        fontSize: 50,
        color:'black',
        fontWeight:"bold"
    },
    texto1:{
        textAlign:'justify',
        fontWeight:"bold"
    }
});

