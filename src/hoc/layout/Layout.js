import React, { Component } from 'react';

import Aux from '../aux/Aux';
import Navigation from '../../components/navigation/Navigation';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Navigation />
            </Aux>
        )
    }
}

export default Layout;