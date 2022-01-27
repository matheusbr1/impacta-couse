import React, { Component } from 'react'

import '../../App.css'

class CashMachine extends Component {

    constructor(props) {
        super(props)

        this.handleInput = this.handleInput.bind(this)
        this.handleWithdraw = this.handleWithdraw.bind(this)

        this.state = {
            cash: 0,
            banknotes: [
                {
                    value: 50,
                    quantity: 0,
                },
                {
                    value: 20,
                    quantity: 0,
                },
                {
                    value: 10,
                    quantity: 0,
                },
                {
                    value: 5,
                    quantity: 0,
                },
            ]
        }
    }

    handleInput(event) {
        this.setState({
            cash: event.target.value
        })
    }

    handleWithdraw() {

        if (this.state.cash % 5 === 0) {
            let { cash, banknotes } = this.state

            let i = 0, arrBanknotes = []

            banknotes.forEach(element => {

                let quantity = Math.floor(cash / banknotes[i].value)
                cash %= banknotes[i].value

                arrBanknotes.push({
                    value: banknotes[i].value,
                    quantity
                })

                i++
            });

            this.setState({
                banknotes: arrBanknotes,
            })

        } else {
            alert('Number not accepted')
        }
    }

    render() {

        const { state } = this

        return (
            <div className="border width" >
                <h3>Cash Machine</h3>
                <input
                    type="text"
                    onChange={this.handleInput} />
                <br />
                <br />
                <button onClick={this.handleWithdraw} >Ok</button>
                <br />
                <div>
                    {state.banknotes.map(element => (
                        <p>{element.quantity} banknotes of $ {element.value}</p>
                    ))}
                </div>
            </div>
        )
    }



}

export default CashMachine