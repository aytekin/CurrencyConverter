import React, { Component, version } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';

import axios from "axios"

export default class Currency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            USD: '',
            EUR: '',
            GBP: '',
            rates: []

        }
        this.getRates = this.getRates.bind(this);
    }

    getRates() {
        axios.get('https://api.exchangerate-api.com/v4/latest/try')
            .then(response => {
                const rates = response.data.rates;
                this.setState({
                    rates,
                    USD: (rates['USD']).toFixed(4),
                    EUR: (rates['EUR']).toFixed(4),
                    GBP: (rates['GBP']).toFixed(4)
                })
            })
    }

    componentDidMount() {
        this.getRates();


    }


    render() {

        const { USD, GBP, EUR } = this.state;

        return (
            <>
                <View style={styles.containerCurrency}>
                    <Text style={styles.head}>TL Bazlı Kur Değerleri</Text>

                    <View style={styles.row}>
                        <Text style={styles.result}>{parseFloat(10000 / parseInt(String(USD).substring(String(USD).length - 4, String(USD).length))).toFixed(3)}</Text>
                        <Image style={styles.icon}
                            source={require('../assest/usd.png')}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.result}>{parseFloat(10000 / parseInt(String(EUR).substring(String(EUR).length - 4, String(EUR).length))).toFixed(3)}</Text>
                        <Image style={styles.icon}
                            source={require('../assest/eur.png')}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.result}>{parseFloat(10000 / parseInt(String(GBP).substring(String(GBP).length - 4, String(GBP).length))).toFixed(3)}</Text>
                        <Image style={styles.icon}
                            source={require('../assest/gbp.png')}
                        />
                    </View>


                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    containerCurrency:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:100
    },
    row: {
        flexDirection: 'row',
    
    },
    result: {
        fontSize: 52,
        color: '#fff'
    },
    icon: {
        width: 40,
        height: 40,
        marginTop: 16,
        marginLeft: 10
    },
    head: {
        fontSize: 25,
        color: '#fff'
    }

});
