//==================================================================================
// Imported Packages For The App Routing
//==================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// CSS
import './index.css';

// Pages
import Schematic from '/pages/schematic/Schematic';


//==================================================================================
// Render Webpage Routes
//==================================================================================
ReactDOM.render(
<Router>
    <Switch>
        <Route exact path = "/" component = { Schematic } />
    </Switch>
</Router>, 
document.getElementById('root'));