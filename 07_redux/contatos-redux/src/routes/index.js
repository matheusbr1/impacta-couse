import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home'
import IMC from '../components/IMC/Group'
import Contacts from '../components/Contacts'
import CashMachine from '../components/CashMachine'
import Introduction from '../components/Introduction'


const Routes = props => (
    <Switch>
        <Route path='/introduction' component={Introduction} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/imc' component={IMC} />
        <Route path='/cashmachine' component={CashMachine} />
        <Route path='*' component={Home} />
    </Switch>
)

export default Routes