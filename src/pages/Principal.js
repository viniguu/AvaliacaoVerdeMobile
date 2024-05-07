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
                    <Text style={styles.Letra}>
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

                        AAAAAAAAAAAAAAAAAA
                    </Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

