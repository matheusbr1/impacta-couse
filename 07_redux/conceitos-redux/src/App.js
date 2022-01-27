import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clickButton, changeTextValue } from './actions/inputAction'

import logo from './logo.svg';
import './App.css';
import { Store } from './store/store';

class App extends Component {


  // constructor(props) {
  //   super(props)
  // }

  // state = {
  //   valorTexto: ''
  // }

  // inputChange = event => {
  //   this.setState({
  //     valorTexto: event.target.value
  //   })
  // }

  render() {

    const { clickButton, changeTextValue, novoValor, valorAtual } = this.props
    // const { valorTexto } = this.state

    return (
      <div className="App" style={{ paddingTop: '10px' }} >

        <input
          type="text"

          // onChange={this.inputChange} 
          // value={valorTexto} 

          onChange={changeTextValue}
          value={novoValor}

        />

        <button onClick={() => clickButton(novoValor)} >Mostrar</button>

        <h1>{novoValor}</h1>
        <h2>{valorAtual}</h2>

      </div>
    );
  }

}

const mapStateToProps = store => ({
  novoValor: store.inputButton.novoValor,
  valorAtual: store.inputButton.valorAtual
})

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton, changeTextValue }, dispatch)

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
