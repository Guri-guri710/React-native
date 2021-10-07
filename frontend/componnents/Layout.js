import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Layout = ({ children }) => {
    return <View style={styles.constiner}><Text> { children }</Text></View>;
    
}

export default Layout

const styles = StyleSheet.create({
    constiner:{
        backgroundColor:'#222f3e',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }
})
