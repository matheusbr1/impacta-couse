import React, { Component } from 'react';
import '../../App.css';


export default class IMC extends Component {

    static defaultProps = {
        limit: 50
    }

    constructor(props) {
        super(props)

        this.state = {
            IMC: 0,
            weight: 0,
            height: 0
        }

        // AJUSTANDO O THIS DA CLASSE E O JSX
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    handleChangeInput(event) {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    calculate() {
        const data = this.state
        let { weight, height } = data

        let IMC = height.includes('.' || ',') ? weight / (height * height) : weight / (height * height) * 10000

        if (IMC > this.props.limit) {
            IMC = this.props.limit
        }

        this.setState({
            IMC: IMC.toFixed(2)
        })
    }

    render() {

        const { state, props } = this

        return (
            <>
                <div className="border width imc">
                    <h2>IMC Calculation</h2>
                    <div className="inputs" >

                        <input
                            name="height"
                            value={state.height}
                            type="text"
                            onChange={this.handleChangeInput}
                            placeholder="Height" />

                        <input
                            name="weight"
                            value={state.weight}
                            type="text"
                            onChange={this.handleChangeInput}
                            placeholder="Weight" />

                        <button onClick={this.calculate} >Calculate</button>
                    </div>
                    <div>
                        <strong>Your IMC: {state.IMC}</strong>
                    </div>
                    <div>
                        <strong>Limit (Max): {props.limit}</strong>
                    </div>
                </div>
            </>
        )
    }
}