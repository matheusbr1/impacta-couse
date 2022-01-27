import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

export default class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dados: []
        }
    }

    async componentDidMount() {
        let response = await fetch('https://reactnative.dev/movies.json');
        let json = await response.json()
        this.setState({
            dados: json.movies
        })
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.dados}
                    returnItem={({ item }) => <Text> {item.title - item.releaseYear} </Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}