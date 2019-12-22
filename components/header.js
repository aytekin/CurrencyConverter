import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {

    render() {
        const { header, headerText } = styles;

        return (
            <View style={header}>
                <Text style={styles.title} >
                   Aytek Converter
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
    }, title: {
        fontSize: 35,
        marginTop: 50,
        fontWeight: '600',
        color: '#fff',
    }
})