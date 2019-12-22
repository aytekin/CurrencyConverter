import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';

import axios from "axios"

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0.00,
            USD: '',
            TL: '',
            EUR: '',
            INR: '',
            GBP: '',
            TL1: '',
            rates: []

        }
        this.getRates = this.getRates.bind(this);
    }

    getRates() {
        axios.get('https://api.exchangerate-api.com/v4/latest/usd')
            .then(response => {
                const rates = response.data.rates;
                this.setState({
                    rates,
                    TL1: (rates['TRY']).toFixed(4),
                })
            })
    }

    componentDidMount() {
        this.getRates();
    }


    render() {

        const { inputValue, tl, TL1, USD, rates } = this.state;

        return (
            <>
                <View style={styles.containerHome}>

                    <View style={styles.row}>
                        <Text style={styles.result}>{tl || parseFloat(0).toFixed(2)}</Text>
                        <Image style={styles.icon}
                            source={require('../assest/try.png')}
                        />
                    </View>

                    <View style={styles.row}>

                        <TextInput style={styles.textInput}

                            placeholder="Değer Giriniz"
                            keyboardType={'numeric'}
                            placeholderTextColor="#fff"
                            selectionColor="#fff"
                            //onChangeText={inputValue => this.setState({ inputValue })}
                            onChangeText={(text) => {
                                const i = parseFloat(text) || 0;

                                this.setState({
                                    input: text,
                                    tl: (i * rates['TRY']).toFixed(2),
                                    usd: (i * rates['USD']).toFixed(2),
                                    cad: (i * rates['CAD']).toFixed(2),
                                    jpy: (i * rates['JPY']).toFixed(2),
                                    eur: (i * rates['EUR']).toFixed(2)
                                })
                            }}
                            maxLength={5}

                        />
                        <Image style={styles.icon2}
                            source={require('../assest/usd.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.littleInfo}>1 USD = {TL1} TRY</Text>
                    </View>
                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    textInput: {
        textAlign: 'center',
        height: 40,
        width: 300,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 10,
        color: '#fff'
    },
    resultView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    row: {
        flexDirection: 'row',
        marginTop: 25
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
    icon2: {
        width: 40,
        height: 40,
    },
    head: {
        fontSize: 25,
        color: '#fff'
    },
    littleInfo: {
        color: '#fff',
        marginTop: 10,
        marginRight: 20
    }

});
