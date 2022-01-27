import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class ConteudoTexto extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >Texto do componente Textinput usando JSX</Text>
                <Text style={styles.text}>Já já teremos mais.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})