import React, { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';

import ViewPager from '@react-native-community/viewpager';


import Currency from "./currency";
import Home from "./home";

export default class Main extends Component {

    render() {

        return (
            
            <ViewPager style={styles.viewPager} initialPage={0}>
                <View key="1">
                    <Home />
                </View>
                <View key="2">
                    <Currency />
                </View>
            </ViewPager>

        )
    }
}

const styles = StyleSheet.create({
    viewPager:{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#2f3640'
    }
})