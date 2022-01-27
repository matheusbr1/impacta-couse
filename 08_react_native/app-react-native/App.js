import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Moment from 'moment'

import Movies from './componentes/Movies'

class Relogio extends Component {

  constructor(props) {
    super(props)

    this.state = {
      horaAtual: this.mostrarHora()
    }

  }

  mostrarHora() {
    return Moment().format('hh:mm:ss')
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        horaAtual: this.mostrarHora()
      })
    }, 1000)
  }

  render() {
    return (
      <Text style={styles.relogio} >{this.state.horaAtual}</Text>
    )
  }
}

import ConteudoTexto from './componentes/conteudo-texto.jsx'

export default class App extends Component {

  render() {
    return (
      <>
        <View style={styles.container} >
          {/* <ConteudoTexto /> */}
          {/* <Relogio /> */}
        </View>
        <View style={styles.container} >
          {/* <ConteudoTexto /> */}
          <Movies style={styles.movies} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  relogio: {
    flex: 1,
    marginTop: 50,
    fontSize: 70,
    alignItems: 'center',
  },
  movies: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f3f3f3'
  }
});
