import React, { Component } from 'react';
import { BrowserRouter as Router, Route  , NavLink , Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import Todo from './Todo';

import {Provider} from 'react-redux';
import store from './store';


export default class Index extends Component {
    render() {

        
        return (
            <div>
                
                <Router>
                   <Route  path="/"  component={Todo} />
                </Router>

            </div>
        );
    }
}

if (document.getElementById('REACT-OBJECT')) {

    ReactDOM.render(
         
            <Provider store={store}>
                <Index /> 
            </Provider> ,
            document.getElementById('REACT-OBJECT')
            
        );

}
